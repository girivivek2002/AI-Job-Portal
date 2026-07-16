import { Grid } from "@mui/material";
import WelcomeCard from "../../components/candidate/dashboard/WelcomeCard";
import DashboardStats from "../../components/candidate/dashboard/DashboardStats";
import RecentApplications from "../../components/candidate/dashboard/RecentApplications";
import ProfileCompletion from "../../components/candidate/dashboard/ProfileCompletion";
import RecommendedJobs from "../../components/candidate/dashboard/RecommendedJobs";
import { useDispatch } from "react-redux";
import { getMyApplicationsThunk } from "../../features/applications/applicationsThunk";
import { getAllJobsThunk } from "../../features/candidate/candidateThunk";
import { useEffect } from "react";
import { getCandidateProfileThunk, getResumeThunk } from "../../features/profile/profileThunk";


const CandidateDashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(
            getMyApplicationsThunk()
        );

        dispatch(getAllJobsThunk());

        dispatch(getCandidateProfileThunk())

        dispatch(getResumeThunk())

    }, [dispatch]);

    return (

        <Grid container spacing={3}>

            <Grid size={{ xs: 12 }}>
                <WelcomeCard />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <DashboardStats />
            </Grid>

            <Grid size={{ xs: 12, lg: 8 }}>
                <RecentApplications />
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
                <ProfileCompletion />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <RecommendedJobs />
            </Grid>

        </Grid>

    );

};

export default CandidateDashboard;