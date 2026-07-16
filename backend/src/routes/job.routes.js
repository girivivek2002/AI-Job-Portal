import express from "express";

import protect from "../middleware/auth.middleware.js";

import authorize from "../middleware/role.middleware.js";


import {
    createJob,
    getAllJobs,
    getJob,
    updateJob,
    deleteJob,
    getMyJobs,
    analyzeJobPrompt,
} from "../controllers/job.controller.js";

const router = express.Router();




router.post(
    "/analyze",
    protect,
    authorize(
        "recruiter"
    ),
    analyzeJobPrompt
);

router.get("/", protect, getAllJobs)

router.post("/", protect, authorize("recruiter"), createJob)

router.get("/my-jobs", protect, authorize("recruiter"), getMyJobs)

router.get("/:id", protect, getJob)

router.put("/:id", protect, authorize("recruiter"), updateJob)

router.delete("/:id", protect, authorize("recruiter"), deleteJob)





export default router;