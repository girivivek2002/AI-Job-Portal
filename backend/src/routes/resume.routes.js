import express from "express"
import protect from "../middleware/auth.middleware.js"
import authorize from "../middleware/role.middleware.js"

import upload from '../config/multer.js'
import { deleteResume, getMyResume, uploadResume } from "../controllers/resume.controller.js"
import cloudinary from "../config/cloudinary.js"




const router = express.Router()

router.post('/upload', protect, authorize("candidate"), upload.single("resume"), uploadResume)
router.get('/me', protect, authorize("candidate"), getMyResume)
router.delete("/me", protect, authorize("candidate"), deleteResume)




export default router



