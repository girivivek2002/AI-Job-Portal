import { ApiError } from "@google/genai";
import CandidateProfile from "../models/CandidateProfile.js";

import asyncHandler from "express-async-handler";


export const getCandidateProfile = asyncHandler(async (req, res) => {

    const profile = await CandidateProfile.findOne({
        userId: req.user._id
    })
    res.json({
        success: true,
        profile
    })

})


export const updateProfile = asyncHandler(async (req, res) => {
    const profile = await CandidateProfile.findOneAndUpdate({
        userId: req.user._id
    },
        req.body,
        {
            new: true
        }
    )
    res.json({
        success: true,
        profile,
    });
})

export const getCandidateById = asyncHandler(async (req, res) => {
    const candidate =
        await CandidateProfile.findById(req.params.candidateId)
            .populate("userId", "name email avatar")

    if (!candidate) {
        throw new ApiError("Candidate not found", 404)
    }

    res.status(200).json({
        success: true,
        candidate
    })

})