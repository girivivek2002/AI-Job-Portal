import { useState } from "react";

import {
    Box,
    Chip,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

const SkillsInput = ({
    title,
    value = [],
    onChange,
}) => {

    const [skill, setSkill] = useState("");

    const addSkill = () => {

        const newSkill = skill.trim();

        if (!newSkill) return;

        if (
            value.some(
                (item) =>
                    item.toLowerCase() === newSkill.toLowerCase()
            )
        ) {
            return;
        }

        onChange([...value, newSkill]);

        setSkill("");

    };

    const removeSkill = (skillToRemove) => {

        onChange(
            value.filter(
                (item) => item !== skillToRemove
            )
        );

    };

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
            <Typography
                variant="h6"
                fontWeight={600}
                mb={3}
            >
                {title}
            </Typography>

            <TextField
                fullWidth
                label="Add Skill"
                value={skill}
                onChange={(e) =>
                    setSkill(e.target.value)
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        addSkill();
                    }
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mt: 3,
                    maxHeight: 180,
                    overflowY: "auto",
                    overflowX: "hidden",
                }}
            >
                {value.map((item) => (
                    <Chip
                        key={item}
                        label={item}
                        color="primary"
                        onDelete={() =>
                            removeSkill(item)
                        }
                        sx={{
                            maxWidth: "100%",
                            "& .MuiChip-label": {
                                whiteSpace: "normal",
                                wordBreak: "break-word",
                                paddingTop: 0.5,
                                paddingBottom: 0.5,
                            },
                        }}
                    />
                ))}
            </Box>
        </Paper>
    );
};

export default SkillsInput;