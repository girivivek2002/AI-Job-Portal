import {
    Box,
    Paper,
    Typography,
} from "@mui/material";
import JobForm from "./jobs/JobForm";



const CreateJob = () => {
    return (
        <Box>
            <Typography
                variant="h4"
                fontWeight={700}
                mb={3}
            >
                Create New Job
            </Typography>

            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 3,
                }}
            >
                <JobForm />
            </Paper>
        </Box>
    );
};

export default CreateJob;