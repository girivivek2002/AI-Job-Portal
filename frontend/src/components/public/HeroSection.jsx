import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const MotionPaper = motion(Paper);

const HeroSection = () => {

    const navigate = useNavigate();

    return (

        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                py: {
                    xs: 8,
                    md: 14,
                },

                background: `
                    radial-gradient(circle at top left, rgba(37,99,235,0.12) 0%, transparent 35%),
                    radial-gradient(circle at bottom right, rgba(14,165,233,0.12) 0%, transparent 35%),
                    linear-gradient(180deg,#F8FAFC 0%,#FFFFFF 100%)
                `,
            }}
        >

            {/* Decorative Background Blur */}

            <Box
                sx={{
                    position: "absolute",
                    top: -120,
                    left: -100,
                    width: 350,
                    height: 350,
                    borderRadius: "50%",
                    background: "primary.main",
                    opacity: 0.08,
                    filter: "blur(80px)",
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: -150,
                    right: -120,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "#06B6D4",
                    opacity: 0.08,
                    filter: "blur(90px)",
                }}
            />

            <Container maxWidth="lg">

                <Grid
                    container
                    spacing={{
                        xs: 8,
                        md: 10,
                    }}
                    alignItems="center"
                >

                    {/* LEFT CONTENT */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -40,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >

                            <Chip
                                label="🚀 AI Powered Hiring Platform"
                                color="primary"
                                sx={{
                                    mb: 3,
                                    px: 1,
                                    fontWeight: 600,
                                    borderRadius: 5,
                                }}
                            />

                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    color: "text.primary",

                                    fontSize: {
                                        xs: "2.6rem",
                                        sm: "3.4rem",
                                        md: "4rem",
                                        lg: "4.6rem",
                                    },
                                }}
                            >

                                Hire Smarter

                                <Box
                                    component="span"
                                    sx={{
                                        display: "block",
                                        background:
                                            "linear-gradient(90deg,#2563EB,#06B6D4)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    With AI Recruitment
                                </Box>

                            </Typography>

                            <Typography
                                sx={{
                                    mt: 3,
                                    fontSize: {
                                        xs: 17,
                                        md: 20,
                                    },
                                    color: "text.secondary",
                                    maxWidth: 560,
                                    lineHeight: 1.8,
                                }}
                            >
                                Find the perfect candidates using AI-powered
                                resume analysis, ATS scoring, intelligent
                                candidate ranking, and smart hiring insights—
                                all in one platform.
                            </Typography>

                            <Stack
                                direction={{
                                    xs: "column",
                                    sm: "row",
                                }}
                                spacing={2}
                                mt={5}
                            >

                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() =>
                                        navigate("/jobs")
                                    }
                                    sx={{
                                        px: 5,
                                        py: 1.8,
                                        borderRadius: 3,
                                        textTransform: "none",
                                        fontWeight: 700,
                                        fontSize: 16,
                                        boxShadow:
                                            "0 15px 35px rgba(37,99,235,.35)",

                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                            boxShadow:
                                                "0 18px 40px rgba(37,99,235,.45)",
                                        },
                                    }}
                                >
                                    Browse Jobs
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={() =>
                                        navigate("/login")
                                    }
                                    sx={{
                                        px: 5,
                                        py: 1.8,
                                        borderRadius: 3,
                                        textTransform: "none",
                                        fontWeight: 700,
                                    }}
                                >
                                    Login
                                </Button>

                            </Stack>

                            <Stack
                                direction={{
                                    xs: "column",
                                    sm: "row",
                                }}
                                spacing={3}
                                mt={5}
                            >

                                <Typography fontWeight={600}>
                                    ✅ ATS Scoring
                                </Typography>

                                <Typography fontWeight={600}>
                                    ✅ Resume Parsing
                                </Typography>

                                <Typography fontWeight={600}>
                                    ✅ AI Candidate Matching
                                </Typography>

                            </Stack>

                        </motion.div>

                    </Grid>

                    {/* RIGHT CONTENT */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >

                        <Stack spacing={4}>

                            <MotionPaper
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                sx={{
                                    p: 4,
                                    borderRadius: 5,
                                    backdropFilter: "blur(16px)",
                                    background:
                                        "rgba(255,255,255,.85)",
                                    border: "1px solid rgba(255,255,255,.5)",
                                    boxShadow:
                                        "0 20px 45px rgba(15,23,42,.08)",
                                }}
                            >

                                <Typography
                                    color="text.secondary"
                                    fontWeight={600}
                                    mb={1}
                                >
                                    ATS SCORE
                                </Typography>

                                <Typography
                                    variant="h3"
                                    fontWeight={800}
                                    color="success.main"
                                >
                                    92%
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    mt={1}
                                >
                                    Excellent Resume Compatibility
                                </Typography>

                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    mt={4}
                                >
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                        >
                                            98%
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Skills Match
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography
                                            variant="h5"
                                            fontWeight={700}
                                        >
                                            5★
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            AI Rating
                                        </Typography>
                                    </Box>
                                </Stack>

                            </MotionPaper>

                            <MotionPaper
                                animate={{
                                    y: [0, 15, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                sx={{
                                    ml: {
                                        md: 8,
                                    },
                                    p: 4,
                                    borderRadius: 5,
                                    backdropFilter: "blur(16px)",
                                    background:
                                        "rgba(255,255,255,.85)",
                                    border: "1px solid rgba(255,255,255,.5)",
                                    boxShadow:
                                        "0 20px 45px rgba(15,23,42,.08)",
                                }}
                            >

                                <Typography
                                    color="text.secondary"
                                    fontWeight={600}
                                    mb={1}
                                >
                                    AI MATCH SCORE
                                </Typography>

                                <Typography
                                    variant="h3"
                                    fontWeight={800}
                                    color="primary.main"
                                >
                                    89%
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    mt={1}
                                >
                                    Intelligent Candidate Ranking
                                </Typography>

                                <Stack
                                    spacing={2}
                                    mt={4}
                                >

                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            borderRadius: 3,
                                            bgcolor: "#F8FAFC",
                                        }}
                                    >
                                        <Typography
                                            fontWeight={700}
                                        >
                                            Resume Analysis
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Skills, experience and
                                            education successfully
                                            analyzed.
                                        </Typography>
                                    </Paper>

                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            borderRadius: 3,
                                            bgcolor: "#F8FAFC",
                                        }}
                                    >
                                        <Typography
                                            fontWeight={700}
                                        >
                                            AI Recommendation
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Highly recommended for
                                            technical interviews.
                                        </Typography>
                                    </Paper>

                                </Stack>

                            </MotionPaper>

                        </Stack>

                    </Grid>

                </Grid>

            </Container>

        </Box>

    );

};

export default HeroSection;