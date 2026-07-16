import {
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

const ExperienceSalarySection = ({
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
                Experience & Salary
            </Typography>

            <Grid container spacing={3}>

                {/* Experience */}

                <Grid size={{ xs: 12 }}>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                    >
                        Experience (Years)
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Minimum Experience"
                        {...register("experienceMin", {
                            valueAsNumber: true,
                        })}
                        error={!!errors.experienceMin}
                        helperText={errors.experienceMin?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Maximum Experience"
                        {...register("experienceMax", {
                            valueAsNumber: true,
                        })}
                        error={!!errors.experienceMax}
                        helperText={errors.experienceMax?.message}
                    />
                </Grid>

                {/* Salary */}

                <Grid size={{ xs: 12 }}>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{ mt: 2 }}
                    >
                        Salary (₹ Per Year)
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Minimum Salary"
                        {...register("salaryMin", {
                            valueAsNumber: true,
                        })}
                        error={!!errors.salaryMin}
                        helperText={errors.salaryMin?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Maximum Salary"
                        {...register("salaryMax", {
                            valueAsNumber: true,
                        })}
                        error={!!errors.salaryMax}
                        helperText={errors.salaryMax?.message}
                    />
                </Grid>

            </Grid>
        </Paper>
    );
};

export default ExperienceSalarySection;