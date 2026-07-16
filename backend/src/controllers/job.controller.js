import Job from "../models/Job.js";
import asyncHandler from "express-async-handler";
import AppError from "../utils/AppError.js";
import { analyzeJob } from "../services/jobAnalyzer.service.js";

// Create Job
export const createJob = asyncHandler(async (req, res) => {
    const job = await Job.create({
        ...req.body,
        recruiterId: req.user._id,
    });

    res.status(201).json({
        success: true,
        job,
    });
});

// Get All Jobs
export const getAllJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find()
        .populate("recruiterId", "name email")
        .sort({ createdAt: -1 });

    res.json({
        success: true,
        count: jobs.length,
        jobs,
    });
});

// Get Single Job
export const getJob = asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id)
        .populate("recruiterId", "name email");

    if (!job) {
        throw new AppError("Job not found", 404);
    }

    res.json({
        success: true,
        job,
    });
});

// Update Job
export const updateJob = asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);

    if (!job) {
        throw new AppError("Job not found", 404);
    }

    // Check ownership
    if (job.recruiterId.toString() !== req.user._id.toString()) {
        throw new AppError("Unauthorized", 403);
    }
    const {
        title,
        description,
        requiredSkills,
        preferredSkills,
        requirements,
        responsibilities,
        experienceMin,
        experienceMax,
        location,
        salaryMin,
        salaryMax,
        status,
    } = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
        req.params.id,
        {
            title,
            description,
            requiredSkills,
            preferredSkills,
            requirements,
            responsibilities,
            experienceMin,
            experienceMax,
            location,
            salaryMin,
            salaryMax,
            status,
        },
        {
            new: true,
            runValidators: true,
        }
    );

    res.json({
        success: true,
        job: updatedJob,
    });
});

// Delete Job
export const deleteJob = asyncHandler(async (req, res) => {
    const job = await Job.findById(req.params.id);

    if (!job) {
        throw new AppError("Job not found", 404);
    }

    // Check ownership
    if (job.recruiterId.toString() !== req.user._id.toString()) {
        throw new AppError("Unauthorized", 403);
    }

    await job.deleteOne();

    res.json({
        success: true,
        message: "Job deleted successfully",
    });
});

// Get My Jobs

export const getMyJobs = asyncHandler(async (req, res) => {


    const {
        search = "",
        status = "",
        page = 1,
        limit = 10,
    } = req.query;

    const query = {
        recruiterId: req.user._id,
    };

    // Search by job title
    if (search.trim()) {
        query.title = {
            $regex: search.trim(),
            $options: "i",
        };
    }

    // Filter by status
    if (status) {
        query.status = status;
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    // Execute queries in parallel
    const [jobs, totalJobs] = await Promise.all([
        Job.find(query)
            .populate("recruiterId", "name email")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limitNumber),

        Job.countDocuments(query),
    ]);

    res.status(200).json({
        success: true,
        jobs,
        pagination: {
            totalJobs,
            currentPage: pageNumber,
            totalPages: Math.ceil(totalJobs / limitNumber),
            limit: limitNumber,
            hasNextPage: pageNumber < Math.ceil(totalJobs / limitNumber),
            hasPreviousPage: pageNumber > 1,
        },
    });

});


export const analyzeJobPrompt =
    asyncHandler(
        async (req, res) => {

            const { prompt } =
                req.body;

            if (!prompt) {
                throw new AppError(
                    "Prompt required",
                    400
                );
            }

            const result =
                await analyzeJob(
                    prompt
                );

            res.json({
                success: true,
                ...result
            });

        });