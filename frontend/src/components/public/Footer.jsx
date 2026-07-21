import {
    Box,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Stack,
    Typography,
} from "@mui/material";

import {
    GitHub,
    LinkedIn,
    EmailOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (

        <Box
            component="footer"
            sx={{
                bgcolor: "#0F172A",
                color: "white",
                pt: 8,
                pb: 3,
            }}
        >

            <Container maxWidth="xl">

                <Grid
                    container
                    spacing={5}
                >

                    <Grid
                        size={{
                            xs: 12,
                            md: 5,
                        }}
                    >

                        <Typography
                            variant="h4"
                            fontWeight={700}
                            gutterBottom
                        >
                            SmartHire AI
                        </Typography>

                        <Typography
                            sx={{
                                color: "grey.400",
                                maxWidth: 450,
                                lineHeight: 1.8,
                            }}
                        >
                            SmartHire AI is an AI-powered recruitment platform
                            that helps recruiters hire better candidates using
                            resume analysis, ATS scoring, and intelligent
                            candidate matching.
                        </Typography>

                    </Grid>

                    <Grid
                        size={{
                            xs: 6,
                            md: 2,
                        }}
                    >

                        <Typography
                            variant="h6"
                            mb={2}
                            fontWeight={600}
                        >
                            Quick Links
                        </Typography>

                        <Stack spacing={1.5}>

                            <Link
                                component="button"
                                underline="hover"
                                color="inherit"
                                onClick={() => navigate("/")}
                            >
                                Home
                            </Link>

                            <Link
                                component="button"
                                underline="hover"
                                color="inherit"
                                onClick={() => navigate("/jobs")}
                            >
                                Jobs
                            </Link>

                            <Link
                                component="button"
                                underline="hover"
                                color="inherit"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Link>

                        </Stack>

                    </Grid>

                    <Grid
                        size={{
                            xs: 6,
                            md: 2,
                        }}
                    >

                        <Typography
                            variant="h6"
                            mb={2}
                            fontWeight={600}
                        >
                            Features
                        </Typography>

                        <Stack spacing={1.5}>

                            <Typography color="grey.400">
                                AI Resume Parsing
                            </Typography>

                            <Typography color="grey.400">
                                ATS Scoring
                            </Typography>

                            <Typography color="grey.400">
                                Smart Matching
                            </Typography>

                            <Typography color="grey.400">
                                Recruiter Dashboard
                            </Typography>

                        </Stack>

                    </Grid>

                    <Grid
                        size={{
                            xs: 12,
                            md: 3,
                        }}
                    >

                        <Typography
                            variant="h6"
                            mb={2}
                            fontWeight={600}
                        >
                            Connect
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                            mb={2}
                        >

                            <IconButton
                                sx={{
                                    color: "white",
                                }}
                            >
                                <GitHub />
                            </IconButton>

                            <IconButton
                                sx={{
                                    color: "white",
                                }}
                            >
                                <LinkedIn />
                            </IconButton>

                            <IconButton
                                sx={{
                                    color: "white",
                                }}
                            >
                                <EmailOutlined />
                            </IconButton>

                        </Stack>

                        <Typography color="grey.400">
                            contact@smarthire.ai
                        </Typography>

                    </Grid>

                </Grid>

                <Divider
                    sx={{
                        my: 5,
                        borderColor: "grey.800",
                    }}
                />

                <Typography
                    textAlign="center"
                    color="grey.500"
                >
                    © {new Date().getFullYear()} SmartHire AI.
                    All rights reserved.
                </Typography>

            </Container>

        </Box>

    );

};

export default Footer;