import { z } from "zod";

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(3, "Full name must be at least 3 characters"),

        email: z
            .string()
            .email("Enter a valid email"),

        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Must contain one uppercase letter")
            .regex(/[a-z]/, "Must contain one lowercase letter")
            .regex(/[0-9]/, "Must contain one number"),

        confirmPassword: z.string(),

        role: z.enum(["candidate", "recruiter"]),

        terms: z.literal(true, {
            errorMap: () => ({
                message: "You must accept the Terms & Conditions",
            }),
        }),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    );