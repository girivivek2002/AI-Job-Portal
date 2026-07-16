import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboard } from "../../api/dashboard.api.js";



export const getRecuiterDashboard = createAsyncThunk(
    "recuiter/dashboard",
    async (credentials, thunkApi) => {
        try {
            const response = await getDashboard()

            console.log(response.data)
            return response.data.stats
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || "failed to get recuiter dashboard data"
            )
        }
    }
)