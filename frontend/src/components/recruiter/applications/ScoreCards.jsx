import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";

const ScoreCard = ({
    title,
    value,
}) => (

    <Paper
        elevation={0}
        sx={{
            p: 3,
            border: 1,
            borderColor: "divider",
            borderRadius: 3,
            textAlign: "center",
        }}
    >
        <Typography color="text.secondary">
            {title}
        </Typography>

        <Typography
            variant="h3"
            fontWeight={700}
            mt={1}
        >
            {value ?? "-"}
        </Typography>
    </Paper>

);

const ScoreCards = ({
    atsScore,
    aiAnalysis,
}) => {

    return (
        <Grid
            container
            spacing={3}
            mb={3}
        >
            <Grid size={{ xs: 12, md: 4 }}>
                <ScoreCard
                    title={aiAnalysis ? "AI Score" : "ATS Score"}
                    value={aiAnalysis ? aiAnalysis?.score : atsScore}
                />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
                <ScoreCard
                    title="Confidence"
                    value={
                        aiAnalysis?.confidence
                            ? `${aiAnalysis.confidence}%`
                            : "-"
                    }
                />
            </Grid>
        </Grid>
    );

};

export default ScoreCards;