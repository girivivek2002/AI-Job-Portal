import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: [
                "candidate",
                "recruiter",
                "admin",
            ],
            default: "candidate",
        },

        avatar: {
            type: String,
            default: "",
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        lastLogin: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre(
    "save",
    async function (next) {
        if (
            !this.isModified("password")
        )
            return next();

        const salt =
            await bcrypt.genSalt(10);

        this.password =
            await bcrypt.hash(
                this.password,
                salt
            );

        next();
    }
);

userSchema.methods.comparePassword =
    async function (
        enteredPassword
    ) {
        return await bcrypt.compare(
            enteredPassword,
            this.password
        );
    };
const User = mongoose.model(
    "User",
    userSchema
);

export default User;