const SKILLS = [
    // Programming Languages
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C",
    "C++",
    "C#",
    "Go",
    "Rust",
    "PHP",
    "Ruby",
    "Kotlin",
    "Swift",
    "Dart",
    "Scala",


    // Frontend
    "HTML",
    "CSS",
    "Sass",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "React",
    "Next.js",
    "Redux",
    "Vue.js",
    "Nuxt.js",
    "Angular",
    "Svelte",
    "jQuery",

    // Backend
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Flask",
    "FastAPI",
    "Spring Boot",
    "Laravel",
    "ASP.NET",
    "Ruby on Rails",

    // Databases
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Redis",
    "Oracle",
    "Microsoft SQL Server",
    "Firebase",
    "Supabase",

    // Cloud & DevOps
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "CI/CD",
    "Terraform",
    "Ansible",
    "Nginx",

    // Version Control
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",

    // Mobile Development
    "React Native",
    "Flutter",
    "Android",
    "iOS",
    "Expo",

    // Testing
    "Jest",
    "Mocha",
    "Chai",
    "Vitest",
    "Cypress",
    "Playwright",
    "Selenium",
    "JUnit",

    // APIs
    "REST API",
    "GraphQL",
    "WebSockets",
    "Socket.IO",
    "gRPC",

    // Data Science & AI
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Data Visualization",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "OpenCV",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "LLM",
    "LangChain",
    "RAG",
    "Prompt Engineering",

    // Security
    "Cybersecurity",
    "OAuth",
    "JWT",
    "Penetration Testing",
    "Network Security",

    // System Design
    "Microservices",
    "Distributed Systems",
    "System Design",
    "Event Driven Architecture",

    // Operating Systems
    "Linux",
    "Ubuntu",
    "Windows Server",

    // Soft Skills
    "Communication",
    "Leadership",
    "Problem Solving",
    "Teamwork",
    "Critical Thinking",
    "Time Management",
    "Project Management",
    "Agile",
    "Scrum",

    // Tools
    "Postman",
    "Webpack",
    "Vite",
    "Figma",
    "Jira",
    "Notion",
    "VS Code",
    "IntelliJ IDEA",

    // Data Engineering
    "Apache Kafka",
    "Apache Spark",
    "Hadoop",
    "ETL",
    "Data Warehousing",

    // Blockchain
    "Blockchain",
    "Solidity",
    "Ethereum",
    "Web3",

    // Soft Skills
    "Communication",
    "Leadership",
    "Teamwork",
    "Problem Solving",
    "Critical Thinking",
    "Time Management",
    "Project Management",
    "Decision Making",
    "Adaptability",
    "Creativity",
    "Negotiation",
    "Presentation Skills",
    "Conflict Resolution",
    "Customer Service",
    "Attention to Detail",

    // Business & Management
    "Microsoft Excel",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Google Workspace",
    "Data Analysis",
    "Business Analysis",
    "Budgeting",
    "Financial Analysis",
    "Risk Management",
    "Strategic Planning",
    "Operations Management",
    "Agile",
    "Scrum",
    "Stakeholder Management",
    "CRM",

    // Sales & Marketing
    "Sales",
    "Lead Generation",
    "Digital Marketing",
    "SEO",
    "SEM",
    "Social Media Marketing",
    "Email Marketing",
    "Content Marketing",
    "Market Research",
    "Brand Management",

    // IT & Software
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Git",
    "GitHub",
    "REST API",

    // Cloud & DevOps
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Linux",

    // Data & AI
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Data Visualization",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "PyTorch",

    // Design & Creative
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Canva",
    "UI Design",
    "UX Design",
    "Video Editing",
    "Adobe Premiere Pro",
    "After Effects",
    "DaVinci Resolve",

    // Engineering & Construction
    "AutoCAD",
    "Revit",
    "SolidWorks",
    "MATLAB",
    "Project Scheduling",
    "Construction Management",
    "Quality Assurance",

    // Finance & Accounting
    "Accounting",
    "Bookkeeping",
    "Tally",
    "QuickBooks",
    "GST",
    "Tax Preparation",
    "Auditing",

    // HR & Recruitment
    "Recruitment",
    "Talent Acquisition",
    "Employee Relations",
    "Payroll",
    "Performance Management",

    // Healthcare & Education
    "Patient Care",
    "Medical Coding",
    "Teaching",
    "Curriculum Development",
    "Training",

    // General Technical Tools
    "Jira",
    "Postman",
    "Firebase",
    "Networking",
    "Cybersecurity",
    "Technical Writing"
];

export const extractSkills = (text) => {

    const skills =
        SKILLS.filter(skill => {

            const escapedSkill =
                skill.replace(
                    /[.*+?^${}()|[\]\\]/g,
                    "\\$&"
                );

            const regex =
                new RegExp(
                    `\\b${escapedSkill}\\b`,
                    "i"
                );

            return regex.test(text);
        });

    return [...new Set(skills)];
};