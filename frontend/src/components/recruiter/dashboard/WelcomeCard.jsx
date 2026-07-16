import {
    Paper,
    Typography,
    Box,
} from "@mui/material";

import { useSelector } from "react-redux";

const WelcomeCard = () => {

    const { user } = useSelector(
        (state) => state.auth
    );

    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
                ? "Good Afternoon"
                : "Good Evening";

    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                mb: 4,
                border: 1,
                borderColor: "divider",
            }}
        >
            <Typography
                variant="h4"
                fontWeight={700}
            >
                {greeting},{" "}
                {user?.name || "Recruiter"} 👋
            </Typography>

            <Typography
                color="text.secondary"
                sx={{
                    mt: 1,
                }}
            >
                Here's an overview of your hiring activities today.
            </Typography>
        </Paper>
    );
};

export default WelcomeCard;