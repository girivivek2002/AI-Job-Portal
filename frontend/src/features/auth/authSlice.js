import { createSlice } from "@reduxjs/toolkit";
import { loadUser, loginUser, registerUser } from "./authThunk.js";
import { removeToken } from "../../utils/tokenManager.js";

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    isInitializing: true
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        logout: (state) => {
            removeToken();
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;

        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user;
                state.isAuthenticated = true;
            })

            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(loadUser.pending, (state) => {
                state.isLoading = true;
                state.error = null
            })

            .addCase(
                loadUser.fulfilled,
                (state, action) => {

                    state.isLoading = false;
                    state.isInitializing = false;
                    state.user = action.payload;
                    state.isAuthenticated = true;

                }
            )

            .addCase(
                loadUser.rejected,
                (state) => {

                    state.isLoading = false;
                    state.isInitializing = false;
                    state.user = null;
                    state.isAuthenticated = false;

                }
            )

            .addCase(registerUser.pending,
                (state) => {
                    state.isLoading = true;
                    state.error = null
                }
            )

            .addCase(registerUser.fulfilled,
                (state, action) => {
                    state.isLoading = false;

                }
            )

            .addCase(registerUser.rejected,
                (state, action) => {
                    state.error = action.payload;
                    state.isLoading = false
                }
            )


    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;