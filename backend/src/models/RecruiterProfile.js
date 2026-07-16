import mongoose from "mongoose";

const recruiterProfileSchema =
    new mongoose.Schema(
        {
            userId: {
                type:
                    mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
                unique: true,
            },

            companyName: {
                type: String,
                required: true,
            },

            companyWebsite: String,

            designation: String,

            companySize: String,

            companyDescription: String,

            logo: String,

            verified: {
                type: Boolean,
                default: false,
            },
        },
        {
            timestamps: true,
        }
    );

export default mongoose.model(
    "RecruiterProfile",
    recruiterProfileSchema
);