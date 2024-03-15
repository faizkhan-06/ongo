import dotenv from "dotenv";
import dbConnect from "./db/dbconnection.js";
import {app} from "./app.js"

dotenv.config({
    path:`./env`
})

dbConnect()
.then( () => {
    app.listen(process.env.PORT , () => {
        console.log(`Server running at PORT: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("db connection failed ",err);
})
