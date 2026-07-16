import {
    Paper,
    TextField,
    Typography,
} from "@mui/material";

const SummaryFormSection = ({
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
                Professional Information
            </Typography>

            <TextField
                fullWidth
                label="Professional Title"
                placeholder="e.g. Full Stack Developer"
                sx={{ mb: 3 }}
                {...register("bio.title")}
                error={!!errors.bio?.title}
                helperText={errors.bio?.title?.message}
            />

            <TextField
                fullWidth
                multiline
                rows={6}
                label="Professional Summary"
                placeholder="Tell recruiters about yourself..."
                {...register("bio.description")}
                error={!!errors.bio?.description}
                helperText={errors.bio?.description?.message}
            />
        </Paper>
    );
};

export default SummaryFormSection;