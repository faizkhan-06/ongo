//-----> This is handling using async await (Both Works Same)
//const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             messaage : error.message
//         })
//     }
// }

//-----> This is Handling using Promises (Both Works Same)
const asyncHandler = (requestHandler) => {

    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
        .catch((error) => next(error))
    }
}


export {asyncHandler}