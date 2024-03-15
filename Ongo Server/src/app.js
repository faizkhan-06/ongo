import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

app.use(cors({origin : process.env.CORS_ORIGIN}))

app.use(express.json())

app.use(express.urlencoded())

app.use(express.static("public"))

app.use(cookieParser())


//router import
import userRouter from "./routes/user.routes.js";
import riderRouter from "./routes/rider.routes.js";
import driverRouter from "./routes/driver.routes.js"

//route declaration
app.use("/api/v1/users",userRouter)
app.use("/api/v1/rider",riderRouter)
app.use("/api/v1/driver",driverRouter)



export {app}