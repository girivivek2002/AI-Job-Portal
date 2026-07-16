import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";

const OverviewItem = ({ label, value }) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
        >
            {label}
        </Typography>

        <Typography
            variant="subtitle1"
            fontWeight={600}
        >
            {value || "-"}
        </Typography>
    </Grid>
);

const JobOverview = ({ job }) => {

    const formatSalary = () => {
        if (!job.salaryMin && !job.salaryMax) {
            return "Not disclosed";
        }

        return `₹${job.salaryMin?.toLocaleString() || 0} - ₹${job.salaryMax?.toLocaleString() || 0}`;
    };

    const formatExperience = () => {
        if (
            job.experienceMin == null &&
            job.experienceMax == null
        ) {
            return "Not specified";
        }

        if (job.experienceMin == job.experienceMax) {
            return `${job.experienceMin} Years`;
        }

        return `${job.experienceMin} - ${job.experienceMax} Years`;
    };

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                mb: 3,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
            }}
        >
            <Typography
                variant="h6"
                fontWeight={600}
                mb={3}
            >
                Job Overview
            </Typography>

            <Grid container spacing={3}>

                <OverviewItem
                    label="Location"
                    value={job.location}
                />

                <OverviewItem
                    label="Employment Type"
                    value={job.employmentType?.replaceAll("_", " ")}
                />

                <OverviewItem
                    label="Experience"
                    value={formatExperience()}
                />

                <OverviewItem
                    label="Salary"
                    value={formatSalary()}
                />

                <OverviewItem
                    label="Total Applications"
                    value={job.applicationsCount}
                />

                <OverviewItem
                    label="Status"
                    value={job.status}
                />

                <OverviewItem
                    label="Posted On"
                    value={new Date(job.createdAt).toLocaleDateString()}
                />

                <OverviewItem
                    label="Last Updated"
                    value={new Date(job.updatedAt).toLocaleDateString()}
                />

            </Grid>
        </Paper>
    );
};

export default JobOverview;