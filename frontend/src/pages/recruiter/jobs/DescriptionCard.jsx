import {
    Paper,
    Typography,
} from "@mui/material";

const DescriptionCard = ({
    description,
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
                mb={2}
            >
                Description
            </Typography>

            <Typography
                color="text.secondary"
                sx={{
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.8,
                }}
            >
                {description || "No description available."}
            </Typography>
        </Paper>
    );
};

export default DescriptionCard;