import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProfile, login, register } from "../../api/auth.api";
import { removeToken, saveToken } from "../../utils/tokenManager";
import { logout } from "./authSlice";




export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            const response = await login(credentials)

            saveToken(response.data.token)

            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || "login failed"
            )
        }
    }
)

export const logoutUser = () => (dispatch) => {

    removeToken();

    dispatch(logout());

};

export const loadUser = createAsyncThunk(
    "auth/loadUser",
    async (_, thunkApi) => {
        try {
            const response = await getProfile()



            return response.data
        } catch (error) {
            removeToken()
            return thunkApi.rejectWithValue(
                "Session expired"
            );
        }
    }
)

export const registerUser = createAsyncThunk(
    "auth/register",
    async (credentials, thunkApi) => {
        try {
            const response = await register(credentials)
            console.log(response)
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || "register failed"
            )
        }
    }
)


