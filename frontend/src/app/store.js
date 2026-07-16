


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import dashboardReducer from "../features/recruiter/dashboardSlice.js";
import jobReducer from "../features/jobs/jobsSlice.js"
import candidateReducer from "../features/candidate/candidateSlice.js"
import profileReducer from "../features/profile/profileSlice.js"
import applicationsReducer from "../features/applications/applicationsSlice.js"
import recruiterApplicationsReducer from "../features/recruiterApplications/recruiterApplicationsSlice.js"


export const store = configureStore({

    reducer: {

        auth: authReducer,
        recruiterDashboard: dashboardReducer,
        jobs: jobReducer,
        candidate: candidateReducer,
        profile: profileReducer,
        applications: applicationsReducer,
        recruiterApplications: recruiterApplicationsReducer

    }

});