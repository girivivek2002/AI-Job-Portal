import {
    Grid,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

const BasicInformationSection = ({
    register,
    errors,
}) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
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
                Basic Information
            </Typography>

            <Grid container spacing={3}>

                <Grid size={{ xs: 12 }}>
                    <TextField
                        fullWidth
                        label="Job Title"
                        {...register("title")}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Location"
                        {...register("location")}
                        error={!!errors.location}
                        helperText={errors.location?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        select
                        fullWidth
                        label="Employment Type"
                        defaultValue="FULL_TIME"
                        {...register("employmentType")}
                        error={!!errors.employmentType}
                        helperText={errors.employmentType?.message}
                    >
                        <MenuItem value="FULL_TIME">
                            Full Time
                        </MenuItem>

                        <MenuItem value="PART_TIME">
                            Part Time
                        </MenuItem>

                        <MenuItem value="CONTRACT">
                            Contract
                        </MenuItem>

                        <MenuItem value="INTERNSHIP">
                            Internship
                        </MenuItem>
                    </TextField>
                </Grid>

            </Grid>
        </Paper>
    );
};

export default BasicInformationSection;