import dotenv from "dotenv";

dotenv.config();


import { GoogleGenAI } from "@google/genai";
import { parseAIJson } from "../../../utils/parseAIJson.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export const analyzeJobWithGemini = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",

    config: {
      temperature: 0.9,
      topP: 0.95,
    },

    contents: `
You are an Expert Technical Recruiter, Hiring Manager, and ATS (Applicant Tracking System) specialist with over 15 years of experience.

Your task is to analyze a job description and generate a complete, enriched, industry-standard job posting.

Do NOT only extract information from the job description.
Also infer realistic missing information based on industry standards.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RULES

1. Return ONLY valid JSON.
2. Never return Markdown.
3. Never explain anything.
4. Never return null.
5. Every field MUST exist.
6. Remove duplicate values.
7. Normalize technology names.

Examples:

ReactJS → React
Javascript → JavaScript
Typescript → TypeScript
NodeJS → Node.js
Express → Express.js
NextJS → Next.js

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ENRICHMENT

If information is missing, infer it using:

• Job Title
• Technologies
• Experience
• Industry Best Practices
• Similar Real-World Job Descriptions

Do NOT invent unrelated technologies.

Generate realistic information.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Examples

React Developer

Required Skills:
React
JavaScript
HTML
CSS
REST API
Git

Preferred Skills:
TypeScript
Redux
Next.js
Tailwind CSS
Jest
Material UI

Responsibilities:
Develop reusable React components
Build responsive web applications
Integrate REST APIs
Optimize application performance
Collaborate with backend developers
Write clean and maintainable code
Participate in code reviews
Debug production issues

Requirements:
Strong JavaScript fundamentals
Experience with React
Experience consuming REST APIs
Knowledge of Git
Responsive Web Design
Problem-solving skills

------------------------------------------------

Frontend Developer

Required Skills:
HTML
CSS
JavaScript
React
Git
REST API
Responsive Design

Preferred Skills:
TypeScript
Redux
Next.js
Tailwind CSS
Material UI

------------------------------------------------

Full Stack Developer

Required Skills:
React
Node.js
Express.js
MongoDB
SQL
REST API
Git

Preferred Skills:
Docker
AWS
Redis
TypeScript
CI/CD

------------------------------------------------

Node.js Developer

Required Skills:
Node.js
Express.js
MongoDB
REST API
JWT
Git

Preferred Skills:
Docker
Redis
AWS
TypeScript

------------------------------------------------

Java Developer

Required Skills:
Java
Spring Boot
Hibernate
JPA
SQL
Git

Preferred Skills:
Docker
Kafka
AWS
Microservices

------------------------------------------------

Python Developer

Required Skills:
Python
Django
Flask
PostgreSQL
REST API
Git

Preferred Skills:
Docker
AWS
Redis
Celery

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GENERATION RULES

Generate:

• 5–10 Required Skills
• 3–6 Preferred Skills
• 5–8 Responsibilities
• 5–8 Requirements

If description is missing,
generate a professional 2–4 sentence description.

If responsibilities are missing,
generate them.

If requirements are missing,
generate them.

If preferredSkills are missing,
generate them.

If requiredSkills contain only 1 or 2 skills,
expand them using industry standards.

If only one experience value exists
Example:

3+ Years

Return

experienceMin = 3
experienceMax = 3

If experience is unavailable

experienceMin = 0
experienceMax = 0

If only one salary value exists
Example:

50000 USD

Return

salaryMin = 50000
salaryMax = 50000

if salary is like 50000 USD - 60000 USD

Return

salaryMin = 50000
salaryMax = 60000

If salary is unavailable

salaryMin = 0
salaryMax = 0


if location exists
Example:

New York, NY

Return

location = New York, NY 

If location is unavailable

return

location = ""

if employmentType exists
Example:

Full Time

Return

employmentType = "FULL_TIME"

If employmentType is unavailable

return

employmentType = "FULL_TIME"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Return EXACTLY this JSON:

{
  "title": "",
  "description": "",
  "requiredSkills": [],
  "preferredSkills": [],
  "experienceMin": 0,
  "experienceMax": 0,
  "requirements": [],
  "responsibilities": [],
  "location": "",
  "employmentType": "",
  "salaryMin": 0,
  "salaryMax": 0
}

Now analyze this Job Description and return ONLY valid JSON.

Job Description:

${prompt}
`
  });

  try {
    return parseAIJson(response.text);
  } catch (error) {
    throw new Error(
      `Failed to parse AI response: ${error.message}`
    );
  }
};

export const analyzeResumeWithGemini = async (resumeText) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",

    contents: `
You are an expert ATS Resume Parser.

Your task is to extract structured information from a resume.

STRICT RULES

- Return ONLY valid JSON.
- Do NOT wrap the JSON inside markdown.
- Do NOT explain anything.
- Do NOT add comments.
- Never invent or infer information.
- Preserve company names, job titles, project names, and education exactly as written.
- If information is missing, return:
  - "" for strings
  - [] for arrays
  - 0 for numbers
- Always return every field in the schema.
- The response must be valid JSON that can be parsed directly with JSON.parse().

====================
RESUME
====================

${resumeText}

====================
EXTRACTION RULES
====================

1. Skills

Extract only technical skills including:

- Programming Languages
- Frameworks
- Libraries
- Databases
- Cloud Platforms
- DevOps Tools
- Version Control
- Operating Systems
- AI / ML Technologies
- Testing Tools
- APIs

Remove duplicates.

Do NOT include soft skills unless explicitly listed.

-------------------------------------

2. Experience

Extract EVERY work experience from sections such as:

- Experience
- Work Experience
- Employment
- Professional Experience
- Internship
- Internships
- Career History
- Freelance
- Contract

Each experience must contain:

{
  "company": "",
  "position": "",
  "startDate": "",
  "endDate": "",
  "description": ""
}

Rules:

- Include internships.
- Include part-time jobs.
- Include full-time jobs.
- Include freelance work.
- Include contract work.
- Include apprenticeships.
- Include research positions.
- Keep newest to oldest.
- Merge bullet points into one paragraph.
- Do NOT rewrite descriptions.
- If dates are missing, return "".
- If no experience exists:

"experiences": []

-------------------------------------

3. experienceYears

Calculate total professional experience.

Rules:

- Include internships.
- Include full-time jobs.
- Include part-time jobs.
- Include contract work.
- Include freelance work.
- Count overlapping periods only once.
- Round DOWN to the nearest whole year.
- If no experience exists:

0

-------------------------------------

4. Education

Extract every education entry.

Each object:

{
  "degree": "",
  "institution": "",
  "startDate": "",
  "endDate": ""
}

Do not infer missing information.

-------------------------------------

5. Projects

Extract every project.

Each object:

{
  "title": "",
  "description": "",
  "technologies": []
}

Rules:

- Merge bullet points into one paragraph.
- Extract technologies mentioned in that project only.
- Remove duplicate technologies.

-------------------------------------

6. Certifications

Return certification names only.

Example:

[
  "AWS Certified Cloud Practitioner",
  "Google Data Analytics Professional Certificate"
]

-------------------------------------

7. Languages

Extract spoken languages only.

Example:

[
  "English",
  "Hindi"
]

Do NOT include programming languages.

-------------------------------------

8. Current Role

Return the job title from the most recent experience.

If no experience exists:

""

-------------------------------------

9. Summary

Generate a professional summary of 2–4 sentences based ONLY on the resume.

Do NOT invent achievements.

Do NOT exaggerate.


====================
RETURN EXACTLY THIS JSON SHAPE
====================

{

  "name": "",
  "title": "",
  "phone": "",
  "location": "",
  "email": "",
  "skills": [],
  "experienceYears": 0,
  "experiences": [],
  "education": [],
  "projects": [],
  "certifications": [],
  "languages": [],
  "currentRole": "",
  "summary": ""
}
`,
  });

  return parseAIJson(response.text);
};


export const analyzeCandidateWithGemini = async (
  job,
  resumeText
) => {

  const response =
    await ai.models.generateContent({

      model: "gemini-2.5-flash",

      contents: `
You are an expert technical recruiter with over 15 years of hiring experience.

Evaluate the candidate against the job requirements.

========================
JOB DETAILS
========================

Title:
${job.title}

Description:
${job.description}

Required Skills:
${job.requiredSkills.join(", ")}

Preferred Skills:
${job.preferredSkills?.join(", ") || "None"}

Minimum Experience:
${job.experienceMin} years

Maximum Experience:
${job.experienceMax} years

========================
CANDIDATE RESUME
========================

${resumeText}

========================

Evaluate the candidate based on:

1. Technical skills
2. Relevant experience
3. Project quality
4. Technologies used
5. Overall suitability

Return ONLY valid JSON.

{
    "score": 0,
    "summary": "",
    "strengths": [],
    "weaknesses": [],
    "missingSkills": [],
    "recommendedRole": "",
    "confidence": 0
}

Rules:

- score must be between 0 and 100
- confidence must be between 0 and 100
- strengths should contain 3 to 5 points
- weaknesses should contain 2 to 5 points
- missingSkills should contain only missing technical skills
- summary must be under 80 words
- recommendedRole should be a single job title
- Do NOT include markdown
- Do NOT wrap JSON inside triple backticks
`
    });

  return parseAIJson(response.text);
};