import { createSlice } from "@reduxjs/toolkit";

import {
    applyJobThunk,
    getJobApplicationThunk,

    getMyApplicationsThunk,
} from "./applicationsThunk";

const initialState = {

    applications: [],

    selectedApplication: null,

    isApplying: false,

    isLoading: false,

    error: null,

};

const applicationsSlice = createSlice({

    name: "applications",

    initialState,

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(
                applyJobThunk.pending,
                (state) => {

                    state.isApplying = true;
                    state.error = null;

                }
            )

            .addCase(
                applyJobThunk.fulfilled,
                (state, action) => {

                    state.isApplying = false;

                    state.error = null;

                    // optional:
                    // state.applications.unshift(action.payload.application);

                }
            )

            .addCase(
                applyJobThunk.rejected,
                (state, action) => {

                    state.isApplying = false;

                    state.error = action.payload;

                }
            )

            .addCase(
                getMyApplicationsThunk.pending,
                (state) => {

                    state.isLoading = true;
                    state.error = null;

                }
            )

            .addCase(
                getMyApplicationsThunk.fulfilled,
                (state, action) => {

                    state.isLoading = false;

                    state.applications =
                        action.payload.myApplications;

                }
            )

            .addCase(
                getMyApplicationsThunk.rejected,
                (state, action) => {

                    state.isLoading = false;

                    state.error = action.payload;

                }
            )
            .addCase(
                getJobApplicationThunk.pending,
                (state) => {

                    state.isLoading = true;
                    state.error = null;
                    state.selectedApplication = null;

                }
            )

            .addCase(
                getJobApplicationThunk.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.selectedApplication =
                        action.payload.application;

                }
            )

            .addCase(
                getJobApplicationThunk.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;

                }
            )

    },

});

export default applicationsSlice.reducer;