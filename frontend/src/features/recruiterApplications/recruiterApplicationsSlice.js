import { createSlice } from "@reduxjs/toolkit";
import { getApplicationDetailsThunk, getJobApplicationAllThunk } from "./recruiterApplicationsThunk";


const initialState = {
    applications: [],
    pagination: {
        totalApplications: 0,
        currentPage: 1,
        totalPages: 1,
        limit: 10,
        hasNextPage: false,
        hasPreviousPage: false,
    },
    selectedApplication: null,
    isLoading: false,
    error: null,
};

const recruiterApplicationsSlice = createSlice({
    name: "recruiterApplications",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getJobApplicationAllThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getJobApplicationAllThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.applications = action.payload.applications;

            })
            .addCase(getJobApplicationAllThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getApplicationDetailsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getApplicationDetailsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.selectedApplication = action.payload.application;
            })
            .addCase(getApplicationDetailsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default recruiterApplicationsSlice.reducer;  