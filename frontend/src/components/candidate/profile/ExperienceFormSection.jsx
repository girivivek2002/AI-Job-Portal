import {
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

const ExperienceFormSection = ({
    register,
    errors,
}) => {

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
                mb={3}
            >
                Experience
            </Typography>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        type="number"
                        label="Total Experience (Years)"
                        {...register("experience", {
                            valueAsNumber: true,
                        })}
                        error={!!errors.experience}
                        helperText={errors.experience?.message}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ExperienceFormSection;