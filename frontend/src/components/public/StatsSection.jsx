import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Stack,
} from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const MotionPaper = motion(Paper);

const stats = [
    {
        number: 2500,
        suffix: "+",
        title: "Candidates",
        icon: <PeopleAltRoundedIcon fontSize="large" />,
    },
    {
        number: 180,
        suffix: "+",
        title: "Companies",
        icon: <BusinessRoundedIcon fontSize="large" />,
    },
    {
        number: 15000,
        suffix: "+",
        title: "Applications",
        icon: <DescriptionRoundedIcon fontSize="large" />,
    },
    {
        number: 95,
        suffix: "%",
        title: "Hiring Accuracy",
        icon: <AutoAwesomeRoundedIcon fontSize="large" />,
    },
];

function AnimatedCounter({ value }) {
    const [count, setCount] = useState(0);

    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate(latest) {
                setCount(Math.floor(latest));
            },
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
}

const StatsSection = () => {


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
                    radial-gradient(circle at top right, rgba(37,99,235,0.06) 0%, transparent 30%),
                    radial-gradient(circle at bottom left, rgba(14,165,233,0.06) 0%, transparent 30%),
                    #F8FAFC
                `,
            }}
        >

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
                        color="primary.main"
                        fontWeight={700}
                        textTransform="uppercase"
                        letterSpacing={2}
                    >
                        Trusted Worldwide
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
                        Empowering Smarter Hiring
                    </Typography>

                    <Typography
                        color="text.secondary"
                        maxWidth={700}
                        sx={{
                            fontSize: {
                                xs: 16,
                                md: 18,
                            },
                        }}
                    >
                        Thousands of candidates and recruiters trust
                        SmartHire AI to streamline recruitment using
                        intelligent resume screening and AI-powered hiring.
                    </Typography>

                </Stack>

                {/* Stats */}

                <Grid
                    container
                    spacing={4}
                >

                    {stats.map((item, index) => (

                        <Grid
                            key={item.title}
                            size={{
                                xs: 12,
                                sm: 6,
                                md: 3,
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
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                }}
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 5,
                                    textAlign: "center",
                                    height: "100%",

                                    background:
                                        "rgba(255,255,255,.75)",

                                    backdropFilter: "blur(16px)",

                                    border: "1px solid rgba(255,255,255,.5)",

                                    boxShadow:
                                        "0 20px 45px rgba(15,23,42,.08)",

                                    transition: ".3s",
                                }}
                            >

                                <Box
                                    sx={{
                                        width: 72,
                                        height: 72,
                                        mx: "auto",
                                        mb: 3,

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        borderRadius: "50%",

                                        color: "primary.main",

                                        bgcolor: "primary.50",
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography
                                    sx={{
                                        fontWeight: 800,
                                        fontSize: {
                                            xs: "2rem",
                                            md: "2.6rem",
                                        },
                                        background: "linear-gradient(90deg,#2563EB,#06B6D4)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    <AnimatedCounter value={item.number} />
                                    {item.suffix}
                                </Typography>

                                <Typography
                                    mt={1}
                                    fontWeight={600}
                                    color="text.primary"
                                >
                                    {item.title}
                                </Typography>

                            </MotionPaper>

                        </Grid>

                    ))}

                </Grid>

            </Container>

        </Box>

    );

};

export default StatsSection;