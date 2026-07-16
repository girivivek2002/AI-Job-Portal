import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Box,
    CircularProgress,
    Grid,
} from "@mui/material";
import { getRecuiterDashboard } from "../../features/recruiter/dashboardThunk";
import WelcomeCard from "../../components/recruiter/dashboard/WelcomeCard";
import StatsGrid from "../../components/recruiter/dashboard/StatsGrid";
import RecentJobs from "../../components/recruiter/dashboard/RecentJobs";
import RecentApplications from "../../components/recruiter/dashboard/RecentApplications";



const RecruiterDashboard = () => {

    const dispatch = useDispatch();

    const {
        dashboard,
        isLoading,
    } = useSelector(
        (state) => state.recruiterDashboard
    );



    useEffect(() => {
        dispatch(getRecuiterDashboard());
    }, [dispatch]);

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 10,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <WelcomeCard />

            <StatsGrid
                dashboard={dashboard}
            />
            <Grid
                container
                spacing={3}
                sx={{ mt: 1 }}
            >
                <Grid size={{ xs: 12, lg: 7 }}>
                    <RecentJobs
                        jobs={dashboard?.recentJobs}
                    />
                </Grid>

                <Grid size={{ xs: 12, lg: 5 }}>
                    <RecentApplications
                        applications={dashboard?.recentApplications}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default RecruiterDashboard;