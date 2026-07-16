import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllJobs, getJobById } from "../../api/jobs.api";





export const getAllJobsThunk = createAsyncThunk(
    "candidate/jobs",
    async (credentials, thunkApi) => {
        try {
            const response = await getAllJobs()


            return response.data.jobs
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || "failed to get recuiter dashboard data"
            )
        }
    }
)

export const getJobByIdThunk = createAsyncThunk(
    "candidate/getJobById",
    async (jobId, thunkAPI) => {
        try {
            const response = await getJobById(jobId);
            return response.data.job;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to load job"
            );
        }
    }
);

