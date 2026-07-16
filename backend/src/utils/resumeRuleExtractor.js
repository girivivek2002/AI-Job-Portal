import { extractEducation } from "./extractEducation.js";
import { extractExperience } from "./extractExperience.js";
import { extractProjects } from "./extractProjects.js";
import { extractSkills } from "./extractSkills.js";





export const extractUsingRules = (text) => {

    return {

        skills:
            extractSkills(text),

        experience:
            extractExperience(
                text
            ),

        education:
            extractEducation(
                text
            ),

        projects:
            extractProjects(
                text
            ),

        certifications:
            [],

        summary: null
    };


}