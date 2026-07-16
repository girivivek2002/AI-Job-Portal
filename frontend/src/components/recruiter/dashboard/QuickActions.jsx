import {
    Paper,
    Typography,
    Stack,
    Button,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";

import { useNavigate } from "react-router-dom";

const QuickActions = () => {

    const navigate = useNavigate();

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: 1,
                borderColor: "divider",
            }}
        >
            <Typography
                variant="h6"
                mb={3}
                fontWeight={600}
            >
                Quick Actions
            </Typography>

            <Stack
                direction={{
                    xs: "column",
                    sm: "row",
                }}
                spacing={2}
            >
                <Button
                    variant="contained"
                    startIcon={<AddRoundedIcon />}
                    onClick={() => navigate("/recruiter/jobs/create")}
                >
                    Create Job
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<WorkRoundedIcon />}
                    onClick={() => navigate("/recruiter/jobs")}
                >
                    View Jobs
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<GroupRoundedIcon />}
                    onClick={() => navigate("/recruiter/candidates")}
                >
                    Candidates
                </Button>
            </Stack>
        </Paper>
    );
};

export default QuickActions;