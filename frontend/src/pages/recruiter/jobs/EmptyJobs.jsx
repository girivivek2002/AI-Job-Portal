import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";

import { useNavigate } from "react-router-dom";

const EmptyJobs = () => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: 10,
                textAlign: "center",
            }}
        >
            <WorkOutlineRoundedIcon
                sx={{
                    fontSize: 70,
                    color: "text.disabled",
                }}
            />

            <Typography
                variant="h5"
                mt={2}
                fontWeight={600}
            >
                No Jobs Found
            </Typography>

            <Typography
                color="text.secondary"
                mb={3}
            >
                Create your first job to start hiring candidates.
            </Typography>

            <Button
                variant="contained"
                onClick={() =>
                    navigate("/recruiter/jobs/create")
                }
            >
                Create Job
            </Button>
        </Box>
    );
};

export default EmptyJobs;