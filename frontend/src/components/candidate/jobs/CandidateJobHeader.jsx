import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import {
    ArrowBackRounded,
    SendRounded,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import ApplyJobDialog from "./ApplyJobDialog";

const CandidateJobHeader = ({ job }) => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const { selectedApplication } = useSelector(
        state => state.applications
    );

    const hasApplied = !!selectedApplication;

    return (

        <Box sx={{ mb: 4 }}>

            <Button
                startIcon={<ArrowBackRounded />}
                onClick={() => navigate(-1)}
                sx={{ mb: 2 }}
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
                        color="success"
                        sx={{
                            width: "fit-content",
                        }}
                    />

                </Stack>

                <Button
                    variant="contained"
                    startIcon={<SendRounded />}
                    disabled={hasApplied}
                    onClick={() => setOpen(true)}
                >
                    {hasApplied
                        ? "Already Applied"
                        : "Apply Now"}
                </Button>

                <ApplyJobDialog
                    open={open}
                    onClose={() => setOpen(false)}
                    jobId={job._id}
                />

            </Box>

        </Box>

    );

};

export default CandidateJobHeader;