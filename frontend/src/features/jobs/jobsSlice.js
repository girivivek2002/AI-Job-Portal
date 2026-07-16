import { createSlice } from "@reduxjs/toolkit";


import {
    getRecruiterJobsThunk,
    createJobThunk,
    updateJobThunk,
    deleteJobThunk,
    getJobByIdThunk,
    analyzeJobThunk,
} from "./jobsThunk";

const initialState = {
    jobs: [],
    selectedJob: null,
    pagination: {
        totalJobs: 0,
        currentPage: 1,
        totalPages: 1,
        limit: 10,
        hasNextPage: false,
        hasPreviousPage: false,
    },
    isLoading: false,
    error: null,
    isAnalyzing: false,
    analysisError: null,
};

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

            // Get Jobs
            .addCase(getRecruiterJobsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(getRecruiterJobsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.jobs = action.payload.jobs;
                state.pagination = action.payload.pagination;
            })

            .addCase(getRecruiterJobsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Create Job
            .addCase(createJobThunk.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(createJobThunk.fulfilled, (state, action) => {

                state.isLoading = false;

                state.jobs.unshift(action.payload.job);

            })

            .addCase(createJobThunk.rejected, (state, action) => {

                state.isLoading = false;

                state.error = action.payload;

            })

            // Update Job
            .addCase(updateJobThunk.fulfilled, (state, action) => {

                state.isLoading = false;

                state.jobs = state.jobs.map((job) =>
                    job._id === action.payload.job._id
                        ? action.payload.job
                        : job
                );

                state.selectedJob = action.payload.job;

            })

            // Delete Job
            .addCase(deleteJobThunk.fulfilled, (state, action) => {
                state.jobs = state.jobs.filter(
                    (job) => job._id !== action.payload
                );
            })

            .addCase(getJobByIdThunk.fulfilled, (state, action) => {

                state.isLoading = false;

                state.selectedJob = action.payload.job;

            })

            .addCase(analyzeJobThunk.pending, (state) => {

                state.isAnalyzing = true;
                state.analysisError = null;

            })

            .addCase(analyzeJobThunk.fulfilled, (state) => {

                state.isAnalyzing = false;

            })

            .addCase(analyzeJobThunk.rejected, (state, action) => {

                state.isAnalyzing = false;
                state.analysisError = action.payload;

            })
    },
});

export default jobsSlice.reducer;