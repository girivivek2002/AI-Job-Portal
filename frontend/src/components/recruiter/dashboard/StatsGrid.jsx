import Grid from "@mui/material/Grid";

import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import StatsCard from "./StatsCard";



const StatsGrid = ({ dashboard }) => {
    // console.log(dashboard)
    return (
        <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Jobs Posted"
                    value={dashboard?.totalJobs || 0}
                    icon={<WorkRoundedIcon />}
                    color="primary"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Applications"
                    value={dashboard?.totalApplications || 0}
                    icon={<DescriptionRoundedIcon />}
                    color="success"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Candidates"
                    value={dashboard?.shortlisted || 0}
                    icon={<GroupRoundedIcon />}
                    color="warning"
                />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <StatsCard
                    title="Interviews"
                    value={dashboard?.interviewed || 0}
                    icon={<EventAvailableRoundedIcon />}
                    color="secondary"
                />
            </Grid>
        </Grid>
    );
};

export default StatsGrid;