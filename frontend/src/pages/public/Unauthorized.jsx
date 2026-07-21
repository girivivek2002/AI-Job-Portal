import { motion } from "framer-motion";

import {
    LockOutlined,
    ArrowBackRounded,
    HomeRounded,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const MotionPaper = motion(Paper);

const Unauthorized = () => {

    const navigate = useNavigate();

    return (

        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",

                background: `
                    radial-gradient(circle at top left, rgba(37,99,235,.08) 0%, transparent 35%),
                    radial-gradient(circle at bottom right, rgba(6,182,212,.08) 0%, transparent 35%),
                    linear-gradient(180deg,#F8FAFC 0%,#FFFFFF 100%)
                `,
            }}
        >

            {/* Background Glow */}

            <Box
                sx={{
                    position: "absolute",
                    top: -120,
                    left: -120,
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    opacity: 0.08,
                    filter: "blur(90px)",
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: -120,
                    right: -120,
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    bgcolor: "secondary.main",
                    opacity: 0.08,
                    filter: "blur(100px)",
                }}
            />

            <Container maxWidth="sm">

                <MotionPaper
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    elevation={0}
                    sx={{
                        p: {
                            xs: 4,
                            md: 6,
                        },

                        borderRadius: 5,

                        textAlign: "center",

                        backdropFilter: "blur(18px)",

                        background: "rgba(255,255,255,.8)",

                        border: "1px solid rgba(255,255,255,.6)",

                        boxShadow: "0 20px 45px rgba(15,23,42,.08)",
                    }}
                >

                    <Box
                        sx={{
                            width: 100,
                            height: 100,
                            mx: "auto",
                            mb: 3,

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            borderRadius: "50%",

                            background:
                                "linear-gradient(135deg,#DBEAFE,#E0F2FE)",

                            color: "primary.main",
                        }}
                    >
                        <LockOutlined sx={{ fontSize: 50 }} />
                    </Box>

                    <Typography
                        sx={{
                            fontWeight: 900,
                            color: "primary.main",

                            fontSize: {
                                xs: "3rem",
                                md: "4rem",
                            },
                        }}
                    >
                        403
                    </Typography>

                    <Typography
                        variant="h4"
                        fontWeight={700}
                        mt={1}
                    >
                        Access Denied
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            mt: 2,
                            maxWidth: 420,
                            mx: "auto",
                            lineHeight: 1.8,
                        }}
                    >
                        You don't have permission to access this page.
                        Please log in with the appropriate account or
                        return to the previous page.
                    </Typography>

                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}
                        spacing={2}
                        justifyContent="center"
                        mt={5}
                    >

                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<HomeRounded />}
                            onClick={() => navigate("/")}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                textTransform: "none",
                                fontWeight: 700,
                            }}
                        >
                            Go Home
                        </Button>

                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<ArrowBackRounded />}
                            onClick={() => navigate(-1)}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                textTransform: "none",
                                fontWeight: 700,
                            }}
                        >
                            Go Back
                        </Button>

                    </Stack>

                </MotionPaper>

            </Container>

        </Box>

    );

};

export default Unauthorized;