import { z } from "zod";

export const profileSchema = z.object({
    bio: z.object({
        name: z.string().min(2, "Name is required"),
        email: z.string().email().optional().or(z.literal("")),
        phone: z.string().optional(),
        title: z.string().optional(),
        location: z.string().optional(),
        description: z.string().optional(),
    }),

    totalExperience: z.number().optional(),

    skills: z.array(z.string()),

    experiences: z.array(z.any()).optional(),

    certifications: z.array(z.any()).optional(),

    education: z.array(z.any()).optional(),

    projects: z.array(z.any()).optional(),
});