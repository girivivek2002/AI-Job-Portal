import express, { Router } from "express"


import protect from "../middleware/auth.middleware.js"
import { getCandidateById, getCandidateProfile, updateProfile } from "../controllers/candidate.controller.js"
import authorize from "../middleware/role.middleware.js"

const router = express.Router()

router.get('/me', protect, getCandidateProfile)

router.put('/me', protect, updateProfile)

router.get("/:candidateId", protect, authorize("recruiter"), getCandidateById)


export default router;
