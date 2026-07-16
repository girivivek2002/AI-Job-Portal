import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";

const Item = ({
    label,
    value,
}) => (

    <Grid size={{ xs: 12, sm: 6, md: 4 }}>

        <Typography
            variant="body2"
            color="text.secondary"
        >
            {label}
        </Typography>

        <Typography
            fontWeight={600}
        >
            {value}
        </Typography>

    </Grid>

);

const JobOverview = ({ job }) => {

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                mb: 3,
                border: 1,
                borderColor: "divider",
            }}
        >
            <Typography
                variant="h6"
                mb={3}
                fontWeight={600}
            >
                Overview
            </Typography>

            <Grid container spacing={3}>

                <Item
                    label="Location"
                    value={job.location}
                />

                <Item
                    label="Employment"
                    value={job.employmentType.replaceAll("_", " ")}
                />

                <Item
                    label="Experience"
                    value={job.experienceMin === job.experienceMax ? `${job.experienceMin} Year` : `${job.experienceMin}-${job.experienceMax} Years`}

                />

                <Item
                    label="Salary"
                    value={job.salaryMin === job.salaryMax ? `₹${job.salaryMin?.toLocaleString()}` : `₹${job.salaryMin?.toLocaleString()} - ₹${job.salaryMax?.toLocaleString()}`}
                />

                <Item
                    label="Applications"
                    value={job.applicationsCount}
                />

                <Item
                    label="Posted On"
                    value={new Date(job.createdAt).toLocaleDateString()}
                />

            </Grid>

        </Paper>
    );

};

export default JobOverview;