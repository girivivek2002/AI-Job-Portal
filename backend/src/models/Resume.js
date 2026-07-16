import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
    {
        candidateId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CandidateProfile",
            required: true,
            unique: true, // One active resume per candidate
        },

        originalFileName: {
            type: String,
            required: true,
        },

        resumeUrl: {
            type: String,
            required: true,
        },

        cloudinaryPublicId: {
            type: String,
            required: true,
        },

        parsedText: {
            type: String,
            default: "",
        },

        source: {
            type: String,
            enum: ["AI", "RULE_BASED"],
            default: "RULE_BASED",
        },

        analysis: {
            skills: {
                type: [String],
                default: [],
            },

            education: [
                {
                    degree: String
                }
            ],

            certifications: {
                type: [String],
                default: [],
            },

            projects: [
                {
                    title: String
                }
            ],

            languages: {
                type: [String],
                default: [],
            },

            experienceYears: {
                type: Number,
                default: 0,
            },

            currentRole: {
                type: String,
                default: "",
            },

            summary: {
                type: String,
                default: "",
            },
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model(
    "Resume",
    resumeSchema
);