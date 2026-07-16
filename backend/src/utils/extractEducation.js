const DEGREES = [
    "BA",
    "Bachelor of Arts",

    "BSc",
    "Bachelor of Science",

    "BCom",
    "Bachelor of Commerce",

    "BBA",
    "Bachelor of Business Administration",

    "BCA",
    "Bachelor of Computer Applications",

    "BTech",
    "Bachelor of Technology",

    "BE",
    "Bachelor of Engineering",

    "BArch",
    "Bachelor of Architecture",

    "BPharm",
    "Bachelor of Pharmacy",

    "BDS",
    "Bachelor of Dental Surgery",

    "MBBS",
    "Bachelor of Medicine and Bachelor of Surgery",

    "BEd",
    "Bachelor of Education",

    "BHM",
    "Bachelor of Hotel Management",

    "BFA",
    "Bachelor of Fine Arts",

    "BDes",
    "Bachelor of Design",

    "BPT",
    "Bachelor of Physiotherapy",

    "BSW",
    "Bachelor of Social Work",

    "LLB",
    "Bachelor of Laws",

    "BAMS",
    "Bachelor of Ayurvedic Medicine and Surgery",

    "BHMS",
    "Bachelor of Homeopathic Medicine and Surgery",

    "BUMS",
    "Bachelor of Unani Medicine and Surgery",

    "BSc Nursing",
    "Bachelor of Science in Nursing",

    "MA",
    "Master of Arts",

    "MSc",
    "Master of Science",

    "MCom",
    "Master of Commerce",

    "MBA",
    "Master of Business Administration",

    "MCA",
    "Master of Computer Applications",

    "MTech",
    "Master of Technology",

    "ME",
    "Master of Engineering",

    "MArch",
    "Master of Architecture",

    "MPharm",
    "Master of Pharmacy",

    "MEd",
    "Master of Education",

    "MHM",
    "Master of Hotel Management",

    "MFA",
    "Master of Fine Arts",

    "MDes",
    "Master of Design",

    "MPT",
    "Master of Physiotherapy",

    "MSW",
    "Master of Social Work",

    "LLM",
    "Master of Laws",

    "MPH",
    "Master of Public Health",

    "MPhil",
    "Master of Philosophy",

    "PhD",
    "Doctor of Philosophy",

    "DPhil",
    "Doctor of Philosophy",

    "MD",
    "Doctor of Medicine",

    "MS",
    "Master of Surgery",

    "DM",
    "Doctorate of Medicine",

    "MCh",
    "Master of Chirurgiae",

    "CA",
    "Chartered Accountant",

    "CS",
    "Company Secretary",

    "CMA",
    "Cost and Management Accountant",

    "CPA",
    "Certified Public Accountant",

    "ACCA",
    "Association of Chartered Certified Accountants",

    "BS",
    "Bachelor of Science",

    "JD",
    "Juris Doctor",

    "DDS",
    "Doctor of Dental Surgery",

    "DVM",
    "Doctor of Veterinary Medicine",

    "DBA",
    "Doctor of Business Administration"
];

export const extractEducation =
    (text) => {

        const lowerText =
            text.toLowerCase();

        return DEGREES
            .filter(degree => {

                const escapedDegree =
                    degree.replace(
                        /[.*+?^${}()|[\]\\]/g,
                        "\\$&"
                    );

                const regex =
                    new RegExp(
                        `\\b${escapedDegree}\\b`,
                        "i"
                    );

                return regex.test(
                    lowerText
                );
            })
            .map(degree => ({
                degree
            }));
    };