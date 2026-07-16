

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
    Box,
    CircularProgress,
    Paper,
    Typography,
} from "@mui/material";
import JobForm from "./jobs/JobForm";
import { getJobByIdThunk } from "../../features/jobs/jobsThunk";



const EditJob = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        selectedJob,
        isLoading,
    } = useSelector((state) => state.jobs);

    useEffect(() => {

        dispatch(getJobByIdThunk(id));

    }, [dispatch, id]);

    if (isLoading || !selectedJob) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 10,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>

            <Typography
                variant="h4"
                fontWeight={700}
                mb={3}
            >
                Edit Job
            </Typography>

            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 3,
                }}
            >
                <JobForm
                    mode="edit"
                    initialValues={selectedJob}
                />
            </Paper>

        </Box>
    );

};

export default EditJob;