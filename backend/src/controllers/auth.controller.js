import User from "../models/User.js";

import AppError from "../utils/AppError.js";

import asyncHandler from "express-async-handler";

import generateToken from "../utils/generateToken.js";

import RecruiterProfile from "../models/RecruiterProfile.js";

import CandidateProfile from "../models/CandidateProfile.js";


export const register =
    asyncHandler(
        async (req, res) => {
            const {
                name,
                email,
                password,
                role,
            } = req.body;

            const existingUser =
                await User.findOne({
                    email,
                });

            if (existingUser) {
                throw new AppError(
                    "User already exists",
                    400
                );
            }

            const user =
                await User.create({
                    name,
                    email,
                    password,
                    role,
                });

            const token =
                generateToken(
                    user._id
                );

            res.status(201).json({
                success: true,

                token,

                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            });

            if (user.role === "recruiter") {
                const recruiterProfile =
                    await RecruiterProfile.create({
                        userId: user._id,
                        companyName: "My Company",
                    });
            }
            if (user.role === "candidate") {
                const candidateProfile =
                    await CandidateProfile.create({
                        userId: user._id,

                    });
            }
        }
    );


export const login =
    asyncHandler(
        async (req, res) => {
            const {
                email,
                password,
            } = req.body;

            const user =
                await User.findOne({
                    email,
                });

            if (!user) {
                throw new AppError(
                    "Invalid credentials",
                    401
                );
            }

            const isMatch =
                await user.comparePassword(
                    password
                );

            if (!isMatch) {
                throw new AppError(
                    "Invalid credentials",
                    401
                );
            }

            user.lastLogin =
                new Date();

            await user.save();

            const token =
                generateToken(
                    user._id
                );

            res.json({
                success: true,
                token,

                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            });
        }
    );