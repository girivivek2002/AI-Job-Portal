import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

import { useNavigate } from "react-router-dom";

const JobHeader = ({ job }) => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                mb: 4,
            }}
        >
            <Button
                startIcon={<ArrowBackRoundedIcon />}
                onClick={() =>
                    navigate(-1)
                }
                sx={{
                    mb: 2,
                }}
            >
                Back
            </Button>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Stack spacing={1}>

                    <Typography
                        variant="h4"
                        fontWeight={700}
                    >
                        {job.title}
                    </Typography>

                    <Chip
                        label={job.status}
                        color={
                            job.status === "OPEN"
                                ? "success"
                                : "error"
                        }
                        sx={{
                            width: "fit-content",
                        }}
                    />

                </Stack>

                <Button
                    variant="contained"
                    startIcon={<EditRoundedIcon />}
                    onClick={() =>
                        navigate(
                            `/recruiter/jobs/${job._id}/edit`
                        )
                    }
                >
                    Edit Job
                </Button>

            </Box>

        </Box>
    );

};

export default JobHeader;