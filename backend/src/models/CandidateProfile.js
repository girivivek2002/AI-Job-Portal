import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
    {
        degree: {
            type: String,
            default: "",
        },

        institution: {
            type: String,
            default: "",
        },

        startDate: {
            type: String,
            default: "",
        },

        endDate: {
            type: String,
            default: "",
        },
    },
    { _id: false }
);

const experienceSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            default: "",
        },

        position: {
            type: String,
            default: "",
        },

        startDate: {
            type: String,
            default: "",
        },

        endDate: {
            type: String,
            default: "",
        },

        description: {
            type: String,
            default: "",
        },
    },
    { _id: false }
);

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: "",
        },

        description: {
            type: String,
            default: "",
        },

        technologies: {
            type: [String],
            default: [],
        },

        githubUrl: {
            type: String,
            default: "",
        },

        liveUrl: {
            type: String,
            default: "",
        },
    },
    { _id: false }
);

const bioSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        location: {
            type: String,
            default: "",
        },

        email: {
            type: String,
            trim: true,
            lowercase: true,
            default: "",
        },

        phone: {
            type: String,
            default: "",
        },

        description: {
            type: String,
            default: "",
        },
    },
    { _id: false }
);


const candidateProfileSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        headline: {
            type: String,
            default: "",
        },

        bio: {
            type: bioSchema,
            default: () => ({}),
        },

        currentPosition: {
            type: String,
            default: "",
        },

        totalExperience: {
            type: Number,
            default: 0,
        },

        skills: {
            type: [String],
            default: [],
        },

        education: {
            type: [educationSchema],
            default: [],
        },

        experiences: {
            type: [experienceSchema],
            default: [],
        },

        projects: {
            type: [projectSchema],
            default: [],
        },

        certifications: {
            type: [String],
            default: [],
        },

        resumeUrl: {
            type: String,
            default: "",
        },

        atsProfileScore: {
            type: Number,
            default: 0,
        },

        profileCompleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model(
    "CandidateProfile",
    candidateProfileSchema
);