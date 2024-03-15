import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { User } from "../models/user.model.js";
import jwt  from "jsonwebtoken";


const generateAccessAndRefreshToken = async (userId) => {

    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
    
        user.refreshToken = refreshToken
        await user.save({ validateBeforSave: false })
    
        return {accessToken,refreshToken}
    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating token")
    }

}

const registerUser = asyncHandler(async (req,res) => {

    // get user details from frontend
    const {fullName,email,username,password} = req.body

    // validation - not empty
    const fields = [fullName,email,username,password]
    fields.forEach( (field) => {
        if(field?.trim() === "") throw new ApiError(400,`All fields are required`)
    });

    // check if user already exists: username, email
    const existingUser = await User.findOne({
        $or: [ {username} , {email} ]
    }
    )
    if(existingUser) throw new ApiError(409,"User with same username or e-mail already exists")

    // check for avatar
    const avatarLocalPath = req.files?.avatar[0]?.path
    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar is required")
    }
    
    // upload them to cloudinary, avatar
    const avatar = await uploadOnCloudinary(avatarLocalPath)

    // create user object - create entry in db
    const user = await User.create(
        {
            fullName,
            // avatar: avatar.url,
            email,
            username,
            password
        }
    )
    
    // remove password and refresh token field from response
    const finalUserData = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    // check for user creation
    if(!finalUserData){
        throw new ApiError(500,"Something went wrong while registering user")
    }

    // return res 
    return res.status(201).json(
        new ApiResponse(200,finalUserData,"User Registered Successfully")
    )



})


const loginUser = asyncHandler(async (req,res) => {

    // req body -> data
    const {username,email,password} = req.body
    console.log(email);

    // username or email
    if(!(username || email)){
        throw new ApiError(400,"username or email is required")
    }
    
    //find the user
    const user = await User.findOne({
        $or: [{username},{email}]
    })

    //Check if user exist or not
    if(!user){
        throw new ApiError(404,"User does not exist")
    }

    //password check
    const isValidPassword = await user.isPasswordCorrect(password)

    if(!isValidPassword){
        throw new ApiError(401,"Invalid Credentials")
    }

    //access and referesh token
    const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    //send cookie
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(200,
        {
            user: loggedInUser,refreshToken,accessToken
        },
        "User login Successfull")
    )



})

const logoutUser = asyncHandler(async (req,res) => {

    const user = req.user
    await User.findByIdAndUpdate(
        user._id,
        {
            $unset: {refreshToken: 1}
        },
        {
            new: true 
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(200,{},"User logout succesfull")
    )

})

const newAccessToken = asyncHandler(async (req,res) => {

    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedIncomingRefreshToken = jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)
    
        const user = await User.findById(decodedIncomingRefreshToken._id)
    
        if(!user){
            throw new ApiError(401,"Invalid Refresh Token")
        }
    
        if(incomingRefreshToken != user?.refreshToken){
            throw new ApiError(401,"Invalid token or token expired")
        }
    
        const{accessToken,newRefreshToken} = await generateAccessAndRefreshToken(user._id)
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
    
        return res.status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",newRefreshToken,options)
        .json(new ApiResponse(200,{
            accessToken,
            refreshToken: newRefreshToken
        },"New Access Token Generation Successfull"))
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid Refresh Token")
    }


})

const changeCurrentPassword = asyncHandler(async (req,res) => {

    const {oldPassword,newPassword} = req.body

    if(!(oldPassword && newPassword)){
        throw new ApiError(400,"Both fields required")
    }
    const user = await User.findById(req.user?._id)

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if(!isPasswordCorrect){
        throw new ApiError(400,"Invalid Old Password")
    }

    user.password = newPassword
    await user.save({validateBeforSave: false})

    return res.status(200)
    .json(new ApiResponse(200,{},"Password Change Successfully"))

})

const updateAccountDetails = asyncHandler( async (req,res) => {
    const {newFullname} = req.body
    if(!newFullname){
        throw new ApiError(400,"field is required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                fullName: newFullname
            }
        },
        {
            new: true
        }
    ).select("-password")

    return res.status(200)
    .json(200,user,"Fullname Change Successfully")
})

const updateAvatar = asyncHandler(async(req,res) => {
    
    const avatarLocalPath = req.file?.path

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is missing")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if(!avatar.url){
        throw new ApiError(400,"Error while uploading avatar")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                avatar: avatar.url
            }
        },
        {
            new: true
        }
    ).select("-password")

    return res.status(200)
    .json(200,user,"Avatar Changed Successfully")
})

export {
    registerUser,
    loginUser,
    logoutUser,
    newAccessToken,
    changeCurrentPassword,
    updateAccountDetails,
    updateAvatar
}