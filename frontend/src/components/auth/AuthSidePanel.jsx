import {
    Box,
    Stack,
    Typography,
} from "@mui/material";

import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

import { keyframes } from "@mui/system";

const float = keyframes`
0%{
transform:translateY(0px);
}
50%{
transform:translateY(-15px);
}
100%{
transform:translateY(0px);
}
`;

const fadeUp = keyframes`
from{
opacity:0;
transform:translateY(30px);
}
to{
opacity:1;
transform:translateY(0);
}
`;

const features = [
    {
        icon: <AutoAwesomeRoundedIcon />,
        title: "AI Candidate Matching",
        desc: "Find the best candidates instantly."
    },
    {
        icon: <GroupsRoundedIcon />,
        title: "Smart Recruitment",
        desc: "Manage hiring with powerful workflows."
    },
    {
        icon: <WorkOutlineRoundedIcon />,
        title: "ATS Resume Analysis",
        desc: "Automatically analyze every resume."
    },
];

const AuthSidePanel = () => {
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",


                background:
                    "linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#2563eb 100%)",

                color: "#fff",

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

                px: {
                    xs: 3,
                    md: 6,
                },

                py: {
                    xs: 4,
                    md: 6,
                },
            }}
        >
            {/* Floating Circles */}

            <Box
                sx={{
                    position: "absolute",
                    width: 220,
                    height: 220,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,.08)",
                    top: -70,
                    right: -70,
                    animation: `${float} 7s ease-in-out infinite`,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,.05)",
                    bottom: -50,
                    left: -50,
                    animation: `${float} 9s ease-in-out infinite`,
                }}
            />

            {/* Content */}

            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    animation: `${fadeUp} .8s ease`,
                }}
            >
                <Typography
                    variant="h2"
                    fontWeight={800}
                    sx={{
                        fontSize: {
                            md: "3rem",
                            lg: "3.5rem",
                        },
                    }}
                >
                    SmartHire
                </Typography>

                <Typography
                    sx={{
                        mt: 2,
                        fontSize: "1.15rem",
                        opacity: .9,
                        maxWidth: 420,
                        lineHeight: 1.7,
                    }}
                >
                    Recruit smarter with AI-powered hiring tools,
                    resume analysis, candidate ranking,
                    and streamlined recruitment workflows.
                </Typography>
            </Box>

            {/* Features */}

            <Stack
                spacing={2}
                sx={{
                    my: 4,
                    position: "relative",
                    zIndex: 1,
                }}
            >
                {features.map((item, index) => (
                    <Box
                        key={item.title}
                        sx={{
                            display: "flex",
                            gap: 2,

                            p: 2.2,

                            borderRadius: 3,

                            bgcolor: "rgba(255,255,255,.08)",

                            backdropFilter: "blur(12px)",

                            border: "1px solid rgba(255,255,255,.12)",

                            transition: ".35s",

                            animation: `${fadeUp} ${0.4 + index * 0.2}s ease`,

                            "& svg": {
                                fontSize: 34,
                                color: "#90caf9",
                            },

                            "&:hover": {
                                transform:
                                    "translateX(10px) scale(1.02)",

                                bgcolor:
                                    "rgba(255,255,255,.14)",
                            },
                        }}
                    >
                        {item.icon}

                        <Box>
                            <Typography
                                fontWeight={700}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    opacity: .8,
                                    mt: .5,
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Stack>

            {/* Footer */}

            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight={600}
                >
                    🚀 Hire Smarter. Recruit Faster.
                </Typography>

                <Typography
                    sx={{
                        opacity: .75,
                        mt: 1,
                    }}
                >
                    Trusted by recruiters to simplify modern hiring.
                </Typography>
            </Box>
        </Box>
    );
};

export default AuthSidePanel;