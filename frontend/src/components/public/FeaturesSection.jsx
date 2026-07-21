import { motion } from "framer-motion";

import {
    AutoAwesomeRounded,
    DescriptionRounded,
    PsychologyRounded,
    SpeedRounded,
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

const features = [
    {
        title: "AI Resume Analysis",
        icon: <PsychologyRounded fontSize="large" />,
        description:
            "Automatically analyzes resumes to extract skills, education, experience, certifications, and projects with high accuracy.",
    },
    {
        title: "ATS Scoring",
        icon: <DescriptionRounded fontSize="large" />,
        description:
            "Instantly calculate ATS compatibility scores so recruiters can shortlist the best candidates faster.",
    },
    {
        title: "Smart Candidate Matching",
        icon: <AutoAwesomeRounded fontSize="large" />,
        description:
            "Our AI intelligently compares candidate profiles against job requirements to recommend the perfect fit.",
    },
    {
        title: "Faster Hiring",
        icon: <SpeedRounded fontSize="large" />,
        description:
            "Reduce manual screening, automate hiring workflows, and speed up recruitment without compromising quality.",
    },
];

const FeaturesSection = () => {

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
                    radial-gradient(circle at left, rgba(37,99,235,.05) 0%, transparent 35%),
                    radial-gradient(circle at right, rgba(6,182,212,.06) 0%, transparent 35%),
                    linear-gradient(180deg,#FFFFFF 0%,#F8FAFC 100%)
                `,
            }}
        >

            {/* Decorative Blur */}

            <Box
                sx={{
                    position: "absolute",
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    opacity: 0.06,
                    filter: "blur(80px)",
                    top: -80,
                    right: -80,
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
                        md: 8,
                    }}
                >

                    <Typography
                        sx={{
                            color: "primary.main",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: 2,
                        }}
                    >
                        Why Choose Us
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
                        Everything You Need
                        <br />
                        For Smarter Hiring
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
                        SmartHire AI combines artificial intelligence,
                        resume parsing, ATS scoring, and intelligent
                        candidate matching to help recruiters hire the
                        right talent quickly and efficiently.
                    </Typography>

                </Stack>

                {/* Feature Cards */}

                <Grid
                    container
                    spacing={4}
                >

                    {features.map((feature, index) => (

                        <Grid
                            key={feature.title}
                            size={{
                                xs: 12,
                                sm: 6,
                                lg: 3,
                            }}
                        >

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
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: "100%",

                                    borderRadius: 5,

                                    textAlign: "center",

                                    background:
                                        "rgba(255,255,255,.8)",

                                    backdropFilter:
                                        "blur(16px)",

                                    border:
                                        "1px solid rgba(255,255,255,.5)",

                                    boxShadow:
                                        "0 20px 45px rgba(15,23,42,.08)",

                                    transition: ".3s",
                                }}
                            >

                                {/* Icon */}

                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,

                                        mx: "auto",
                                        mb: 3,

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        borderRadius: "50%",

                                        color: "primary.main",

                                        background:
                                            "linear-gradient(135deg,#DBEAFE,#E0F2FE)",

                                        transition: ".3s",

                                        ".MuiPaper-root:hover &": {
                                            transform: "scale(1.08)",
                                        },
                                    }}
                                >
                                    {feature.icon}
                                </Box>

                                {/* Title */}

                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,

                                        fontSize: {
                                            xs: "1.2rem",
                                            md: "1.35rem",
                                        },
                                    }}
                                >
                                    {feature.title}
                                </Typography>

                                {/* Description */}

                                <Typography
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {feature.description}
                                </Typography>

                            </MotionPaper>

                        </Grid>

                    ))}

                </Grid>

            </Container>

        </Box>

    );

};

export default FeaturesSection;