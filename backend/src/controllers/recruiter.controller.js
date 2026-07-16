import asyncHandler from "express-async-handler";
import Job from "../models/Job.js";
import Application from "../models/Application.js";

export const getDashBoardStats = asyncHandler(async (req, res) => {

    const jobs = await Job.find({
        recruiterId: req.user._id
    })

    const jobIds = jobs.map(job => job._id)  // it will makea array of job ids
    const applications = await Application.find({
        jobId: {
            $in: jobIds
        }
    })

    const stats = {
        totalJobs: jobs.length,

        activeJobs: jobs.filter(job => job.status === "OPEN").length,

        closedJobs: jobs.filter(job => job.status === "CLOSED").length,

        totalApplications: applications.length,

        shortlisted: applications.filter(app => app.status === "SHORTLISTED").length,
        interviewed: applications.filter(app => app.status === "INTERVIEW").length,

        hired: applications.filter(app => app.status === "HIRED").length,
        rejected: applications.filter(app => app.status === "REJECTED").length,

    }

    res.status(200).json({
        success: true,
        stats
    })
})