import { Router } from "express";
import { createDriver } from "../controllers/driver.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/drivereq").post(verifyJWT, createDriver)

export default router