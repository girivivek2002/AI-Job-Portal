import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import calculateProfileCompletion from "../../../utils/calculateProfileCompletion";

const StatCard = ({
    title,
    value,
}) => (

    <Paper
        elevation={0}
        sx={{
            p: 3,
            border: 1,
            borderColor: "divider",
            borderRadius: 3,
        }}
    >

        <Typography color="text.secondary">
            {title}
        </Typography>

        <Typography
            variant="h4"
            fontWeight={700}
            mt={1}
        >
            {value}
        </Typography>

    </Paper>

);

const DashboardStats = () => {

    const { applications } = useSelector((state) => state.applications);

    const { profile, resume } = useSelector((state) => state.profile);

    const shortlistedNumber = applications.filter(app => app.status === "SHORTLISTED").length;
    const interviewsNumber = applications.filter(app => app.status === "SHORTLISTED").length;
    const data = calculateProfileCompletion(profile, resume)

    // Replace with dashboard data from backend
    const stats = {
        applications: applications.length || 0,
        shortlisted: shortlistedNumber || 0,
        interviews: interviewsNumber || 0,
        profileCompletion: data.percentage || 0,
    };

    return (

        <Grid container spacing={3}>

            <Grid size={{ xs: 6, md: 3 }}>
                <StatCard
                    title="Applications"
                    value={stats.applications}
                />
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
                <StatCard
                    title="Shortlisted"
                    value={stats.shortlisted}
                />
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
                <StatCard
                    title="Interviews"
                    value={stats.interviews}
                />
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
                <StatCard
                    title="Profile"
                    value={`${stats.profileCompletion}%`}
                />
            </Grid>

        </Grid>

    );

};

export default DashboardStats;