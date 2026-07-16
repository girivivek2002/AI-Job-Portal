import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
    {
        candidateId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "CandidateProfile",
            required: true,
        },

        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
            required: true,
        },

        atsScore: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },

        aiAnalysis: {
            source: {
                type: String,
                enum: ["AI", "RULE_BASED", "PENDING"],
                default: "PENDING",
            },

            score: {
                type: Number,
                default: null,
                min: 0,
                max: 100,
            },

            summary: {
                type: String,
                default: "",
            },

            strengths: {
                type: [String],
                default: [],
            },

            weaknesses: {
                type: [String],
                default: [],
            },

            missingSkills: {
                type: [String],
                default: [],
            },

            recommendedRole: {
                type: String,
                default: "",
            },

            confidence: {
                type: Number,
                default: null,
                min: 0,
                max: 100,
            },

            analyzedAt: {
                type: Date,
                default: null,
            },
        },

        status: {
            type: String,
            enum: [
                "APPLIED",
                "SHORTLISTED",
                "INTERVIEW",
                "REJECTED",
                "HIRED",
            ],
            default: "APPLIED",
        },

        recruiterNotes: {
            type: String,
            default: "",
        },

        statusHistory: [
            {
                status: {
                    type: String,
                    required: true,
                },

                changedAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

applicationSchema.index(
    {
        candidateId: 1,
        jobId: 1,
    },
    {
        unique: true,
    }
);

export default mongoose.model(
    "Application",
    applicationSchema
);