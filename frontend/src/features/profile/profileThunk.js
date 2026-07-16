import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCandidateProfile, getResume, updateProfile, uploadResume } from "./profile.api";



export const getCandidateProfileThunk = createAsyncThunk(
    "candidate/getCandidateProfile",
    async (_, thunkApi) => {
        try {
            const response = await getCandidateProfile()
            return response.data
        } catch (error) {
            removeToken()
            return thunkApi.rejectWithValue(
                "Session expired"
            );
        }
    }
)



export const uploadResumeThunk = createAsyncThunk(
    "profile/uploadResume",
    async (file, thunkAPI) => {
        try {

            const formData = new FormData();
            formData.append("resume", file);

            // Upload resume
            const uploadResponse = await uploadResume(formData);

            console.log("uploadResponse", uploadResponse)

            // Refresh candidate profile
            const profileResponse = await thunkAPI.dispatch(
                getCandidateProfileThunk()
            ).unwrap();

            return {
                resume: uploadResponse.data.resume,
                analysis: uploadResponse.data.analysis,
                profile: profileResponse.profile,
            };

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                "Resume upload failed."
            );

        }
    }
);


export const getResumeThunk = createAsyncThunk(
    "profile/getResume",
    async (_, thunkAPI) => {
        try {
            const response = await getResume()

            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                "Resume upload failed."
            );
        }
    }
);

export const updateProfileThunk = createAsyncThunk(
    "profile/updateProfile",
    async (data, thunkAPI) => {
        try {
            const response = await updateProfile(data)
            console.log(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                "Resume upload failed."
            );
        }
    }
);



