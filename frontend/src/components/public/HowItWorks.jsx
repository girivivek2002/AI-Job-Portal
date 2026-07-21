import { motion } from "framer-motion";

import {
    AnalyticsRounded,
    CheckCircleRounded,
    PsychologyRounded,
    UploadFileRounded,
    WorkOutlineRounded,
} from "@mui/icons-material";

import {
    Box,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

const MotionPaper = motion(Paper);

const steps = [
    {
        icon: <WorkOutlineRounded sx={{ fontSize: 42 }} />,
        title: "Create Job",
        description:
            "Recruiters create detailed job descriptions manually or with AI assistance.",
    },
    {
        icon: <UploadFileRounded sx={{ fontSize: 42 }} />,
        title: "Upload Resume",
        description:
            "Candidates upload resumes while AI automatically extracts skills, education, and experience.",
    },
    {
        icon: <PsychologyRounded sx={{ fontSize: 42 }} />,
        title: "AI Analysis",
        description:
            "Our AI evaluates resumes, calculates ATS scores, and identifies the strongest candidates.",
    },
    {
        icon: <AnalyticsRounded sx={{ fontSize: 42 }} />,
        title: "Smart Ranking",
        description:
            "Candidates are ranked using AI insights, ATS compatibility, and job relevance.",
    },
    {
        icon: <CheckCircleRounded sx={{ fontSize: 42 }} />,
        title: "Hire Faster",
        description:
            "Recruiters review AI recommendations and confidently hire the best talent.",
    },
];

const HowItWorksSection = () => {

    return (

        <Box
            sx={{
                position: "relative",
                overflow: "hidden",

                py: {
                    xs: 8,
                    md: 12,
                },

                background: `
                    radial-gradient(circle at top left, rgba(37,99,235,.05) 0%, transparent 35%),
                    radial-gradient(circle at bottom right, rgba(6,182,212,.05) 0%, transparent 35%),
                    linear-gradient(180deg,#F8FAFC 0%,#FFFFFF 100%)
                `,
            }}
        >

            {/* Decorative Blur */}

            <Box
                sx={{
                    position: "absolute",
                    width: 320,
                    height: 320,
                    bgcolor: "primary.main",
                    opacity: 0.05,
                    filter: "blur(90px)",
                    borderRadius: "50%",
                    left: -120,
                    top: 40,
                }}
            />

            <Container maxWidth="lg">

                {/* Heading */}

                <Stack
                    spacing={2}
                    alignItems="center"
                    textAlign="center"
                    mb={{
                        xs: 6,
                        md: 9,
                    }}
                >

                    <Typography
                        sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            letterSpacing: 2,
                            textTransform: "uppercase",
                        }}
                    >
                        Process
                    </Typography>

                    <Typography
                        sx={{
                            fontWeight: 800,
                            lineHeight: 1.2,

                            fontSize: {
                                xs: "2rem",
                                md: "2.8rem",
                            },
                        }}
                    >
                        How SmartHire AI Works
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            maxWidth: 700,

                            fontSize: {
                                xs: 16,
                                md: 18,
                            },

                            lineHeight: 1.8,
                        }}
                    >
                        Our intelligent recruitment workflow helps recruiters
                        identify top talent faster using AI-powered automation
                        and data-driven hiring insights.
                    </Typography>

                </Stack>

                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                >

                    {steps.map((step, index) => (

                        <Grid
                            key={step.title}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 4,
                                lg: 2.4,
                            }}
                            sx={{
                                position: "relative",
                            }}
                        >

                            {/* Connecting Line */}

                            {index !== steps.length - 1 && (
                                <Box
                                    sx={{
                                        display: {
                                            xs: "none",
                                            lg: "block",
                                        },

                                        position: "absolute",

                                        top: 54,

                                        left: "75%",

                                        width: "60%",

                                        height: 2,

                                        background:
                                            "linear-gradient(90deg,#2563EB,#06B6D4)",

                                        opacity: .25,

                                        zIndex: 0,
                                    }}
                                />
                            )}

                            <MotionPaper
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: .6,
                                    delay: index * .15,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                elevation={0}
                                sx={{
                                    position: "relative",

                                    zIndex: 2,

                                    p: 4,

                                    height: "100%",

                                    textAlign: "center",

                                    borderRadius: 5,

                                    background:
                                        "rgba(255,255,255,.82)",

                                    backdropFilter:
                                        "blur(16px)",

                                    border:
                                        "1px solid rgba(255,255,255,.6)",

                                    boxShadow:
                                        "0 20px 45px rgba(15,23,42,.08)",
                                }}
                            >

                                {/* Step Number */}

                                <Typography
                                    sx={{
                                        position: "absolute",
                                        top: 18,
                                        right: 20,

                                        color: "primary.main",

                                        fontWeight: 800,

                                        fontSize: 18,

                                        opacity: .25,
                                    }}
                                >
                                    {`0${index + 1}`}
                                </Typography>

                                {/* Icon */}

                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,

                                        mx: "auto",

                                        mb: 3,

                                        borderRadius: "50%",

                                        display: "flex",

                                        alignItems: "center",

                                        justifyContent: "center",

                                        color: "primary.main",

                                        background:
                                            "linear-gradient(135deg,#DBEAFE,#E0F2FE)",
                                    }}
                                >
                                    {step.icon}
                                </Box>

                                {/* Title */}

                                <Typography
                                    sx={{
                                        fontWeight: 700,

                                        mb: 2,

                                        fontSize: "1.25rem",
                                    }}
                                >
                                    {step.title}
                                </Typography>

                                {/* Description */}

                                <Typography
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {step.description}
                                </Typography>

                            </MotionPaper>

                        </Grid>

                    ))}

                </Grid>

            </Container>

        </Box>

    );

};

export default HowItWorksSection;