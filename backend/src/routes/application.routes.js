import express from "express"
import protect from "../middleware/auth.middleware.js"
import authorize from "../middleware/role.middleware.js"
import { applyJob, getApplication, getApplicationDetails, getJobApplication, getMyApplications, updateApplicationStatus } from "../controllers/application.controller.js"


const router = express.Router()

router.get("/:applicationId", protect, authorize("recruiter"), getApplicationDetails)
router.get('/my', protect, authorize("candidate"), getMyApplications)
router.get('/my/:jobId', protect, authorize("candidate"), getApplication)
router.post('/apply/:jobId', protect, authorize("candidate"), applyJob)
router.get('/jobs/:jobId', protect, authorize("recruiter"), getJobApplication)
router.patch(
    "/:applicationId/status",
    protect,
    authorize("recruiter"),
    updateApplicationStatus
);




export default router