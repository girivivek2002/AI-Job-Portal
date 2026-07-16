
import {
    extractUsingRules
}
    from "../utils/resumeRuleExtractor.js";
import { analyzeResumeWithAI } from "./ai/index.js";

export const analyzeResume =
    async (text) => {

        try {

            const aiResult =
                await analyzeResumeWithAI(text);

            return {
                source: "AI",
                analysis: aiResult
            };

        } catch (error) {

            console.log(
                "AI Failed:",
                error.message
            );

            return {
                source:
                    "RULE_BASED",

                analysis:
                    extractUsingRules(
                        text
                    )
            };
        }
    };