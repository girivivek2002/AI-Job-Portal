import express from "express"
import protect from "../middleware/auth.middleware.js"
import authorize from "../middleware/role.middleware.js"
import { getDashBoardStats } from "../controllers/recruiter.controller.js"

const router = express.Router()

router.get("/dashboard", protect, authorize("recruiter"), getDashBoardStats)



export default router