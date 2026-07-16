import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
    {
        recruiterId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        requiredSkills: [String],

        preferredSkills: [String],

        requirements: {
            type: [String],
            default: [],
        },

        responsibilities: {
            type: [String],
            default: [],
        },
        experienceMin: Number,

        experienceMax: Number,

        location: String,

        employmentType: {
            type: String,
            enum: [
                "FULL_TIME",
                "PART_TIME",
                "CONTRACT",
                "INTERNSHIP"
            ],
            default: "FULL_TIME"
        },

        salaryMin: Number,

        salaryMax: Number,

        status: {
            type: String,
            enum: ["OPEN", "CLOSED"],
            default: "OPEN"
        },

        applicationsCount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "Job",
    jobSchema
);