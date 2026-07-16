import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    applyJob,
    getJobApplication,
    getMyApplications,
} from "./applications.api";

export const applyJobThunk = createAsyncThunk(
    "applications/applyJob",

    async (jobId, thunkAPI) => {

        try {

            const response = await applyJob(jobId);


            return response.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(

                error.response?.data?.message ||

                "Failed to apply."

            );

        }

    }
);

export const getMyApplicationsThunk =
    createAsyncThunk(

        "applications/getMyApplications",

        async (_, thunkAPI) => {

            try {

                const response =
                    await getMyApplications();

                console.log("all applications", response.data);

                return response.data;

            } catch (error) {

                return thunkAPI.rejectWithValue(

                    error.response?.data?.message ||

                    "Failed to load applications."

                );

            }

        }

    );



export const getJobApplicationThunk = createAsyncThunk(
    "applications/getJobApplication",
    async (jobId, thunkAPI) => {


        try {
            const response = await getJobApplication(jobId);

            return response.data;
        } catch (error) {
            console.log("Error:", error);
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to load applications"
            );
        }
    }
);