
import { extractUsingRules } from "../utils/resumeRuleExtractor.js";
import { analyzeJobWithAI } from "./ai/index.js";

export const analyzeJob =
    async (prompt) => {

        try {

            const result =
                await analyzeJobWithAI(
                    prompt
                );

            return {
                source: "AI",
                job: result
            };

        } catch {

            return {
                source:
                    "RULE_BASED",

                job:
                    extractUsingRules(
                        prompt
                    )
            };
        }
    };