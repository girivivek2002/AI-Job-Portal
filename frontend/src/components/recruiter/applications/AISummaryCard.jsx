import {
    Box,
    Paper,
    Typography,
} from "@mui/material";
import ListCard from "../../../pages/recruiter/jobs/ListCard";



const AISummaryCard = ({
    aiAnalysis,
}) => {

    return (
        <Box
            mt={3}
        >
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
                    mb={2}
                >
                    AI Summary
                </Typography>

                <Typography
                    color="text.secondary"
                >
                    {aiAnalysis?.summary}
                </Typography>
            </Paper>

            <ListCard
                title="Strengths"
                items={aiAnalysis?.strengths || []}
            />

            <ListCard
                title="Weaknesses"
                items={aiAnalysis?.weaknesses || []}
            />

            <ListCard
                title="Missing Skills"
                items={aiAnalysis?.missingSkills || []}
            />
        </Box>
    );
};

export default AISummaryCard;