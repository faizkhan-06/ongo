import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"


const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(connectionInstance); 
        console.log(`Db connected to host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Database Connection Failed :",error);
        // throw error;  (Either use throw or use below method to exit in case of connection failure)
        process.exit(1)
    }
}

export default dbConnect