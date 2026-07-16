import { createSlice } from "@reduxjs/toolkit";
import {
    getCandidateProfileThunk,
    getResumeThunk,
    uploadResumeThunk,
} from "./profileThunk";

const initialState = {
    profile: null,
    resume: null,
    analysis: null,
    isLoading: false,
    isUploading: false,
    error: null,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Upload Resume
            .addCase(uploadResumeThunk.pending, (state) => {
                state.isUploading = true;
                state.error = null;
            })
            .addCase(uploadResumeThunk.fulfilled, (state, action) => {
                state.isUploading = false;
                state.error = null;

                state.resume = action.payload.resume;
                state.analysis = action.payload.analysis;

                // If your API returns the updated profile
                if (action.payload.profile) {
                    state.profile = action.payload.profile;
                }
            })
            .addCase(uploadResumeThunk.rejected, (state, action) => {
                state.isUploading = false;
                state.error = action.payload;
            })

            // Get Candidate Profile
            .addCase(getCandidateProfileThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCandidateProfileThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.profile = action.payload.profile;
            })
            .addCase(getCandidateProfileThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getResumeThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getResumeThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.resume = action.payload.resume;

            })
            .addCase(getResumeThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

    },
});

export default profileSlice.reducer;