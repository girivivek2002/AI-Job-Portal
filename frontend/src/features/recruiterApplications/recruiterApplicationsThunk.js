import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApplicationDetails, getJobApplicationAll } from "./recruiterApplications.api";


export const getJobApplicationAllThunk = createAsyncThunk(
    "recruiterApplications/getJobApplicationAll",
    async (jobId, thunkAPI) => {

        try {
            const response = await getJobApplicationAll(jobId);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to load applications"
            );
        }
    }
)

export const getApplicationDetailsThunk = createAsyncThunk(
    "recruiterApplications/getApplicationDetails",
    async (id, thunkAPI) => {
        try {
            const response = await getApplicationDetails(id);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Failed to load applications"
            );
        }
    }
)