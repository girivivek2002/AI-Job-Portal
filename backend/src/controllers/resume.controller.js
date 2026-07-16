import Resume from "../models/Resume.js";

import CandidateProfile
    from "../models/CandidateProfile.js";

import asyncHandler
    from "express-async-handler";

import AppError
    from "../utils/AppError.js";

import {
    extractTextFromPDF
}
    from "../services/pdf.service.js";

import {
    uploadResumeToCloudinary,

    deleteResumeFromCloudinary
}
    from "../services/cloudinary.service.js";

import {
    analyzeResume
}
    from "../services/resumeAnalyzer.service.js";





export const uploadResume =
    asyncHandler(
        async (req, res) => {

            if (!req.file) {
                throw new AppError(
                    "Resume file required",
                    400
                );
            }

            const candidate =
                await CandidateProfile.findOne({
                    userId:
                        req.user._id
                });

            if (!candidate) {
                throw new AppError(
                    "Candidate profile not found",
                    404
                );
            }

            const oldResume =
                await Resume.findOne({
                    candidateId:
                        candidate._id
                });

            if (oldResume) {

                await deleteResumeFromCloudinary(
                    oldResume.cloudinaryPublicId
                );

                await oldResume.deleteOne();
            }

            const parsedText =
                await extractTextFromPDF(
                    req.file.buffer
                );

            const {
                source,
                analysis
            } =
                await analyzeResume(
                    parsedText
                );



            const cloudinaryResult =
                await uploadResumeToCloudinary(
                    req.file.buffer
                );

            const resume =
                await Resume.create({
                    candidateId:
                        candidate._id,

                    originalFileName:
                        req.file.originalname,

                    resumeUrl:
                        cloudinaryResult.secure_url,

                    cloudinaryPublicId:
                        cloudinaryResult.public_id,

                    parsedText,

                    source,

                    analysis
                });

            candidate.skills =
                analysis.skills || [];

            candidate.resumeUrl = cloudinaryResult.secure_url || "";

            candidate.totalExperience =
                analysis.experienceYears || 0;

            candidate.experiences =
                analysis.experiences || [];

            candidate.education =
                analysis.education || [];

            candidate.projects =
                analysis.projects || [];

            candidate.certifications =
                analysis.certifications || [];


            candidate.profileCompleted =
                true;

            candidate.bio.description = analysis.summary || "";
            candidate.bio.email = analysis.email || "";
            candidate.bio.phone = analysis.phone || "";
            candidate.bio.location = analysis.location || "";
            candidate.bio.title = analysis.title || "";
            candidate.bio.name = analysis.name || "";

            console.log(candidate.bio);

            candidate.markModified("bio");

            await candidate.save();


            res.status(201).json({
                success: true,

                message:
                    "Resume uploaded successfully",

                source,

                analysis,

                resume
            });
        }
    );


export const getMyResume =
    asyncHandler(
        async (req, res) => {

            const candidate =
                await CandidateProfile.findOne({
                    userId:
                        req.user._id
                });

            const resume =
                await Resume.findOne({
                    candidateId:
                        candidate._id
                });

            res.json({
                success: true,
                resume
            });
        }
    );

export const deleteResume =
    asyncHandler(
        async (req, res) => {

            const candidate =
                await CandidateProfile.findOne({
                    userId:
                        req.user._id
                });

            const resume =
                await Resume.findOne({
                    candidateId:
                        candidate._id
                });

            if (!resume) {
                throw new AppError(
                    "Resume not found",
                    404
                );
            }

            await deleteResumeFromCloudinary(
                resume.cloudinaryPublicId
            );

            await resume.deleteOne();

            res.json({
                success: true,
                message:
                    "Resume deleted"
            });
        }
    );