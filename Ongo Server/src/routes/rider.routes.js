import { Router } from "express";
import { createRider } from "../controllers/rider.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()

router.route("/ridereq").post(verifyJWT, createRider)

export default router