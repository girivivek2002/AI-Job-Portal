import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

import { Controller } from "react-hook-form";

const DescriptionSection = ({
    control,
    loading = false,
    onGenerateAI,
}) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
                width: "100%",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    mb: 3,
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight={600}
                >
                    Job Description
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<AutoAwesomeRoundedIcon />}
                    onClick={onGenerateAI}
                    disabled={loading}
                >
                    Generate with AI
                </Button>
            </Box>

            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        multiline
                        minRows={8}
                        maxRows={20}
                        placeholder="Write a detailed job description..."
                        sx={{
                            "& .MuiInputBase-inputMultiline": {
                                overflowWrap: "break-word",
                                wordBreak: "break-word",
                            },
                        }}
                    />
                )}
            />
        </Paper>
    );
};

export default DescriptionSection;