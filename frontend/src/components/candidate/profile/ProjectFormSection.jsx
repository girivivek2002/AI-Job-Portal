import {
    Box,
    Button,
    IconButton,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import { Controller, useFieldArray } from "react-hook-form";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import SkillsInput from "../../../pages/recruiter/jobs/SkillsInput";



const ProjectFormSection = ({
    control,
    register,
}) => {

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "projects",
    });

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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                }}
            >
                <Typography variant="h6">
                    Projects
                </Typography>

                <Button
                    startIcon={<AddRoundedIcon />}
                    onClick={() =>
                        append({
                            title: "",
                            description: "",
                            technologies: [],
                        })
                    }
                >
                    Add Project
                </Button>
            </Box>

            {fields.map((field, index) => (

                <Paper
                    key={field.id}
                    variant="outlined"
                    sx={{
                        p: 3,
                        mb: 3,
                        position: "relative",
                    }}
                >
                    <IconButton
                        color="error"
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                        }}
                        onClick={() => remove(index)}
                    >
                        <DeleteOutlineRoundedIcon />
                    </IconButton>

                    <TextField
                        fullWidth
                        label="Project Title"
                        sx={{ mb: 2 }}
                        {...register(`projects.${index}.title`)}
                    />

                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Description"
                        sx={{ mb: 2 }}
                        {...register(`projects.${index}.description`)}
                    />

                    <Controller
                        control={control}
                        name={`projects.${index}.technologies`}
                        render={({ field }) => (
                            <SkillsInput
                                title="Technologies"
                                value={field.value || []}
                                onChange={field.onChange}
                            />
                        )}
                    />

                </Paper>

            ))}

        </Paper>
    );
};

export default ProjectFormSection;