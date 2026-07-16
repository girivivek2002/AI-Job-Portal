import Application from "../models/Application.js";
import { calculateATSScore } from "../services/ats.service.js";
import CandidateProfile from "../models/CandidateProfile.js";
import Job from "../models/Job.js";
import asyncHandler from "express-async-handler";

import AppError from "../utils/AppError.js";
import Resume from "../models/Resume.js";
import { analyzeCandidateWithAI } from "../services/ai/index.js";


export const applyJob = asyncHandler(async (req, res) => {
    const jobId = req.params.jobId

    const job =
        await Job.findById(
            jobId
        );

    if (!job) {
        throw new AppError(
            "Job not found",
            404
        );
    }

    const candidate = await CandidateProfile.findOne({
        userId: req.user._id
    })
    if (!candidate) {
        throw new AppError(
            "Candidate profile not found",
            404
        );
    }

    const alreadyApplied = await Application.findOne({
        candidateId: candidate._id,
        jobId
    })

    if (alreadyApplied) {
        throw new AppError("Aready Applied", 400)
    }

    const resume = await Resume.findOne({
        candidateId: candidate._id
    })

    const atsScore = await calculateATSScore(candidate, job)

    const aiAnalysis = await analyzeCandidateWithAI(
        job,
        resume.parsedText
    );

    const application = await Application.create({
        candidateId: candidate._id,
        jobId,
        atsScore,
        aiAnalysis,
        statusHistory: [
            {
                status: "APPLIED"
            }
        ]
    })

    job.applicationsCount += 1

    await job.save();

    res.status(201).json({
        success: true,
        application,
    });
})


//for candidate all applied applications
export const getMyApplications = asyncHandler(async (req, res) => {

    const candidate = await CandidateProfile.findOne({
        userId: req.user._id
    });

    if (!candidate) {
        throw new AppError(
            "Candidate profile not found",
            404
        );
    }

    const myApplications = await Application.find({
        candidateId: candidate._id
    })
        .populate("jobId")
        .sort({
            createdAt: -1
        });

    res.status(200).json({
        success: true,
        myApplications
    });
});


//for recruiter 
export const getJobApplication = asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.jobId)

    if (!job) {
        throw new AppError(
            "Job not found",
            404
        );
    }

    if (
        job.recruiterId.toString() !==
        req.user._id.toString()
    ) {
        throw new AppError(
            "Unauthorized",
            403
        );
    }


    const applications = await Application.find({
        jobId: job._id
    }).populate({
        path: "candidateId",
        populate: {
            path: "userId",
            select: "name email"
        }
    }).sort({
        atsScore: -1
    })

    const rankedApplications =
        applications.map(
            (application, index) => ({
                rank: index + 1,
                ...application.toObject()
            })
        );

    res.status(200).json({
        success: true,
        totalApplications: applications.length,
        applications: rankedApplications
    })
})


export const updateApplicationStatus =
    asyncHandler(async (req, res) => {

        const { status } = req.body;

        const application =
            await Application.findById(
                req.params.applicationId
            )
                .populate("jobId");

        if (!application) {
            throw new AppError(
                "Application not found",
                404
            );
        }

        if (
            application.jobId.recruiterId.toString() !==
            req.user._id.toString()
        ) {
            throw new AppError(
                "Unauthorized",
                403
            );
        }

        application.status = status;

        application.statusHistory.push({
            status
        });

        await application.save();

        res.json({
            success: true,

            application
        });
    });


export const getApplication = asyncHandler(async (req, res) => {

    const jobId = req.params.jobId

    const candidate = await CandidateProfile.findOne({
        userId: req.user._id
    })

    if (!candidate) {
        throw new AppError(
            "Candidate profile not found",
            404
        );
    }

    const application = await Application.findOne({
        candidateId: candidate._id,
        jobId
    })

    if (!application) {
        return res.json({
            success: true,
            hasApplied: false,
            application: null,
        });
    }
    res.json({
        success: true,
        application
    })
})


export const getApplicationDetails = asyncHandler(async (req, res) => {
    const applicationId = req.params.applicationId;
    const application = await Application.findById(applicationId).populate("candidateId")
    if (!application) {
        throw new AppError("Application not found", 404);
    }
    res.json({
        success: true,
        application,
    });
})
