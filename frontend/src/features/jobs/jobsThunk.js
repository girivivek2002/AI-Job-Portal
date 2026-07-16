import { createAsyncThunk } from "@reduxjs/toolkit";
import { analyzeJob, createJob, deleteJob, getJobById, getRecruiterJobs, updateJob } from "../../api/jobs.api";



export const getRecruiterJobsThunk = createAsyncThunk(
    "jobs/getRecruiterJobs",
    async (params, thunkAPI) => {
        try {
            const response = await getRecruiterJobs(params);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to load jobs"
            );
        }
    }
);

export const createJobThunk = createAsyncThunk(
    "jobs/createJob",
    async (data, thunkAPI) => {

        try {
            const response = await createJob(data);
            console.log(response.data)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to create job"
            );
        }
    }
);

export const updateJobThunk = createAsyncThunk(
    "jobs/updateJob",
    async ({ id, data }, thunkAPI) => {
        try {
            const response = await updateJob(id, data);

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to update job"
            );
        }
    }
);

export const deleteJobThunk = createAsyncThunk(
    "jobs/deleteJob",
    async (id, thunkAPI) => {

        try {

            await deleteJob(id);

            return id;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                "Failed to delete job"
            );

        }

    }
);

export const getJobByIdThunk = createAsyncThunk(
    "jobs/getJobById",
    async (jobId, thunkAPI) => {
        try {
            const response = await getJobById(jobId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to analyze job"
            );
        }
    }
);

export const analyzeJobThunk = createAsyncThunk(
    "jobs/analyzeJob",
    async (prompt, thunkAPI) => {

        try {

            const response = await analyzeJob(prompt);

            return response.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                "Failed to analyze job."
            );

        }

    }
);