import {
    Button,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WelcomeCard = () => {

    const navigate = useNavigate();

    const { user } = useSelector(
        state => state.auth
    );

    return (

        <Paper
            elevation={0}
            sx={{
                p: 4,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
            }}
        >

            <Typography
                variant="h4"
                fontWeight={700}
            >
                Welcome back, {user?.name} 👋
            </Typography>

            <Typography
                color="text.secondary"
                mt={1}
            >
                Ready to find your next opportunity?
            </Typography>

            <Stack
                direction="row"
                spacing={2}
                mt={3}
            >

                <Button
                    variant="contained"
                    onClick={() =>
                        navigate("/candidate/jobs")
                    }
                >
                    Browse Jobs
                </Button>

                <Button
                    variant="outlined"
                    onClick={() =>
                        navigate("/candidate/profile")
                    }
                >
                    View Profile
                </Button>

            </Stack>

        </Paper>

    );

};

export default WelcomeCard;