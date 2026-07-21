import { motion } from "framer-motion";

import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const CTASection = () => {

    const navigate = useNavigate();

    return (

        <Box
            sx={{
                position: "relative",
                overflow: "hidden",

                py: {
                    xs: 10,
                    md: 14,
                },

                background:
                    "linear-gradient(135deg,#2563EB 0%,#0EA5E9 55%,#06B6D4 100%)",
            }}
        >

            {/* Background Glow */}

            <Box
                sx={{
                    position: "absolute",
                    top: -120,
                    left: -120,
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    bgcolor: "white",
                    opacity: 0.08,
                    filter: "blur(80px)",
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: -150,
                    right: -100,
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    bgcolor: "#ffffff",
                    opacity: 0.08,
                    filter: "blur(90px)",
                }}
            />

            <Container maxWidth="md">

                <MotionBox
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
                        duration: 0.8,
                    }}
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                    }}
                >

                    {/* Small Label */}

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,.85)",
                            textTransform: "uppercase",
                            letterSpacing: 2,
                            fontWeight: 700,
                            mb: 2,
                        }}
                    >
                        Start Today
                    </Typography>

                    {/* Heading */}

                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            lineHeight: 1.2,

                            fontSize: {
                                xs: "2.2rem",
                                md: "3.4rem",
                            },
                        }}
                    >
                        Ready to Transform
                        <br />
                        Your Hiring Process?
                    </Typography>

                    {/* Description */}

                    <Typography
                        sx={{
                            mt: 3,
                            mx: "auto",
                            maxWidth: 700,

                            color: "rgba(255,255,255,.9)",

                            lineHeight: 1.8,

                            fontSize: {
                                xs: 16,
                                md: 19,
                            },
                        }}
                    >
                        Join thousands of recruiters and companies using
                        SmartHire AI to streamline recruitment with
                        AI-powered resume analysis, ATS scoring, and
                        intelligent candidate matching.
                    </Typography>

                    {/* Buttons */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 6,
                            width: "100%",
                        }}
                    >
                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}
                            spacing={2}
                            sx={{
                                width: {
                                    xs: "100%",
                                    sm: "auto",
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={() => navigate("/jobs")}
                                sx={{
                                    minWidth: 220,
                                    py: 1.8,
                                    borderRadius: 3,
                                    bgcolor: "white",
                                    color: "primary.main",
                                    fontWeight: 700,
                                    textTransform: "none",

                                    width: {
                                        xs: "100%",
                                        sm: 220,
                                    },
                                }}
                            >
                                Browse Jobs
                            </Button>

                            <Button
                                variant="outlined"
                                onClick={() => navigate("/login")}
                                sx={{
                                    minWidth: 220,
                                    py: 1.8,
                                    borderRadius: 3,
                                    color: "white",
                                    border: "2px solid rgba(255,255,255,.7)",
                                    fontWeight: 700,
                                    textTransform: "none",

                                    width: {
                                        xs: "100%",
                                        sm: 220,
                                    },
                                }}
                            >
                                Login
                            </Button>
                        </Stack>
                    </Box>

                    {/* Bottom Trust Text */}

                    <Typography
                        sx={{
                            mt: 5,
                            color: "rgba(255,255,255,.8)",
                            fontSize: 15,
                        }}
                    >
                        ✓ AI Resume Parsing &nbsp;&nbsp;•&nbsp;&nbsp;
                        ✓ ATS Scoring &nbsp;&nbsp;•&nbsp;&nbsp;
                        ✓ Smart Candidate Matching
                    </Typography>

                </MotionBox>

            </Container>

        </Box>

    );

};

export default CTASection;