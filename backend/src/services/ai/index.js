import { ApiError } from "@google/genai";
import {
    analyzeCandidateWithGemini,
    analyzeJobWithGemini,
    analyzeResumeWithGemini
}
    from "./providers/gemini.provider.js";

export const analyzeJobWithAI =
    async (prompt) => {

        return analyzeJobWithGemini(
            prompt
        );
    };


export const analyzeResumeWithAI = async (text) => {
    return analyzeResumeWithGemini(text);
}


export const analyzeCandidateWithAI =
    async (job, resumeText) => {

        try {

            const analysis =
                await analyzeCandidateWithGemini(
                    job,
                    resumeText
                );

            return {

                source: "AI",

                ...analysis
            };

        } catch (error) {

            console.error(error);

            return {

                source:
                    "RULE_BASED",

                score: null,

                summary:
                    "AI analysis could not be generated.",

                strengths: [],

                weaknesses: [
                    "Using ATS score only."
                ]
            };
        }
    };