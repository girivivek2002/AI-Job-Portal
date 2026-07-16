import { createSlice } from "@reduxjs/toolkit";
import { getRecuiterDashboard } from "./dashboardThunk";

const initialState = {
    dashboard: {
        totalJobs: null,
        activeJobs: null,
        closedJobs: null,
        totalApplications: null,
        shortlisted: null,
        interviewed: null,
        hired: null,
        rejected: null,
    },
    isLoading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: "recruiterDashboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecuiterDashboard.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(getRecuiterDashboard.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;

                state.dashboard.totalJobs = action.payload.totalJobs;
                state.dashboard.activeJobs = action.payload.activeJobs;
                state.dashboard.closedJobs = action.payload.closedJobs;
                state.dashboard.totalApplications = action.payload.totalApplications;
                state.dashboard.shortlisted = action.payload.shortlisted;
                state.dashboard.interviewed = action.payload.interviewed;
                state.dashboard.hired = action.payload.hired;
                state.dashboard.rejected = action.payload.rejected;
            })

            .addCase(getRecuiterDashboard.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default dashboardSlice.reducer;