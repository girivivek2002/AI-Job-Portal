import jwt from "jsonwebtoken";

import User from "../models/User.js";

import AppError from "../utils/AppError.js";

import asyncHandler from "express-async-handler";

const protect =
    asyncHandler(
        async (
            req,
            res,
            next
        ) => {
            let token;

            if (
                req.headers.authorization &&
                req.headers.authorization.startsWith(
                    "Bearer"
                )
            ) {
                token =
                    req.headers.authorization.split(
                        " "
                    )[1];
            }

            if (!token) {
                throw new AppError(
                    "Not authorized",
                    401
                );
            }

            const decoded =
                jwt.verify(
                    token,
                    process.env.JWT_SECRET
                );

            req.user =
                await User.findById(
                    decoded.userId
                ).select(
                    "-password"
                );

            next();
        }
    );

export default protect;