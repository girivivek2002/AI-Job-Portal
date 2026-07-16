import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import RecruiterDashboard from "../pages/recruiter/RecruiterDashboard";
import HomePage from "../pages/public/HomePage";
import PublicLayout from "../layouts/PublicLayout";
import CandidateLayout from "../layouts/CandidateLayout";
import RecruiterLayout from "../layouts/RecruiterLayout";
import ProtectedRoute from "./ProtectedRoute";
import Unauthorized from "../pages/public/Unauthorized";
import Jobs from "../pages/recruiter/Jobs";
import CreateJob from "../pages/recruiter/CreateJob";
import EditJob from "../pages/recruiter/EditJob";
import JobDetails from "../pages/recruiter/JobDetails";
import BrowseJobs from "../pages/candidate/BrowseJobs";

import ProfilePage from "../pages/candidate/ProfilePage";
import EditProfileForm from "../components/candidate/profile/EditProfileForm";
import CandidateJobDetails from "../pages/candidate/CandidateJobDetails";
import MyApplications from "../pages/candidate/MyApplications";
import RecruiterApplicationDetails from "../pages/recruiter/RecruiterApplicationDetails";
import Analytics from "../pages/recruiter/Analytics";




const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route element={<PublicLayout />}>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />

                </Route>
                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />


                <Route path="/candidate"
                    element={
                        <ProtectedRoute
                            allowedRoles={["candidate"]}
                        >
                            <CandidateLayout />
                        </ProtectedRoute>}>

                    <Route
                        path="dashboard"
                        element={<CandidateDashboard />}
                    />
                    <Route
                        path="profile"
                        element={<ProfilePage />}
                    />

                    <Route
                        path="jobs"
                        element={<BrowseJobs />}
                    />

                    <Route
                        path="jobs/:id"
                        element={<CandidateJobDetails />}
                    />

                    <Route
                        path="applications"
                        element={<MyApplications />}
                    />

                    <Route
                        path="profile/edit"
                        element={<EditProfileForm />}
                    />

                </Route>

                <Route path="/recruiter"
                    element={
                        <ProtectedRoute
                            allowedRoles={["recruiter"]}
                        >
                            <RecruiterLayout />
                        </ProtectedRoute>}>

                    <Route
                        path="dashboard"
                        element={<RecruiterDashboard />}
                    />

                    <Route
                        path="jobs"
                        element={<Jobs />}
                    />

                    <Route
                        path="jobs/create"
                        element={<CreateJob />}
                    />
                    <Route
                        path="jobs/:id"
                        element={<JobDetails />}
                    />

                    <Route
                        path="jobs/:id/edit"
                        element={<EditJob />}
                    />

                    <Route
                        path="applications/:id"
                        element={<RecruiterApplicationDetails />}
                    />
                    <Route
                        path="analytics"
                        element={<Analytics />}
                    />

                </Route>
                <Route path="/unauthorized" element={<Unauthorized />} />


            </Routes>

        </BrowserRouter>
    );
};

export default AppRouter;
