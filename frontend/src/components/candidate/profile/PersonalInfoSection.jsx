import {
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

const PersonalInfoSection = ({
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
                fontWeight={600}
                mb={3}
            >
                Personal Information
            </Typography>

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("bio.name")}
                        error={!!errors?.bio?.name}
                        helperText={errors?.bio?.name?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        {...register("bio.email")}
                        error={!!errors?.bio?.email}
                        helperText={errors?.bio?.email?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        {...register("bio.phone")}
                        error={!!errors?.bio?.phone}
                        helperText={errors?.bio?.phone?.message}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        label="Location"
                        placeholder="Enter your location"
                        {...register("bio.location")}
                        error={!!errors?.bio?.location}
                        helperText={errors?.bio?.location?.message}
                    />
                </Grid>

            </Grid>
        </Paper>
    );
};

export default PersonalInfoSection;