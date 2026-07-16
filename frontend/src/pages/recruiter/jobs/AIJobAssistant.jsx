import { useState } from "react";

import {
    Paper,
    Typography,
    TextField,
} from "@mui/material";

import Button from "@mui/material/Button";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const AIJobAssistant = ({
    loading,
    onGenerate,
}) => {

    const [prompt, setPrompt] = useState("");

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                mb: 4,
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
                ✨ AI Job Assistant
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                mb={3}
            >
                Describe your hiring requirement in natural language.
            </Typography>

            <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Need a React developer with 3 years experience..."
                value={prompt}
                onChange={(e) =>
                    setPrompt(e.target.value)
                }
            />

            <Button
                sx={{ mt: 3 }}
                variant="contained"
                startIcon={<AutoAwesomeRoundedIcon />}
                loading={loading}
                onClick={() => onGenerate(prompt)}
            >
                Generate
            </Button>

        </Paper>
    );
};

export default AIJobAssistant;