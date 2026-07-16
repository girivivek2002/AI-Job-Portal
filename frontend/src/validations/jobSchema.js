import { z } from "zod";

export const jobSchema = z.object({
    title: z
        .string()
        .min(3, "Job title must be at least 3 characters"),

    location: z
        .string()
        .min(2, "Location is required"),

    employmentType: z.enum([
        "FULL_TIME",
        "PART_TIME",
        "CONTRACT",
        "INTERNSHIP",
    ]),

    experienceMin: z.coerce.number().min(0),
    experienceMax: z.coerce.number().min(0),

    salaryMin: z.coerce.number().min(0),
    salaryMax: z.coerce.number().min(0),

    description: z.string(),

    requiredSkills: z.array(z.string()),
    preferredSkills: z.array(z.string()),

    requirements: z.array(z.string()),
    responsibilities: z.array(z.string()),
}).refine(
    (data) => data.experienceMax >= data.experienceMin,
    {
        path: ["experienceMax"],
        message:
            "Maximum experience must be greater than or equal to minimum experience.",
    }
).refine(
    (data) => data.salaryMax >= data.salaryMin,
    {
        path: ["salaryMax"],
        message:
            "Maximum salary must be greater than or equal to minimum salary.",
    }
);