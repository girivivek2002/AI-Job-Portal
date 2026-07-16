import { createSlice } from "@reduxjs/toolkit";
import { getAllJobsThunk, getJobByIdThunk } from "./candidateThunk";




const initialState = {
    allJobs: [],
    isLoading: false,
    error: null,
    selectedJob: null
};

const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllJobsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllJobsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.allJobs = action.payload;
            })
            .addCase(getAllJobsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getJobByIdThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getJobByIdThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.selectedJob = action.payload;
            })
            .addCase(getJobByIdThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })



    }
});

export default candidateSlice.reducer;