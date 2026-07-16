import {
    Box,
    Button,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import { useFieldArray } from "react-hook-form";

const EducationFormSection = ({
    control,
    register,
}) => {

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name: "education",
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
                    Education
                </Typography>

                <Button
                    startIcon={<AddRoundedIcon />}
                    onClick={() =>
                        append({
                            degree: "",
                            institution: "",
                            startDate: "",
                            endDate: "",
                        })
                    }
                >
                    Add Education
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

                    <Grid container spacing={2}>

                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Degree"
                                {...register(
                                    `education.${index}.degree`
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Institution"
                                {...register(
                                    `education.${index}.institution`
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                type="text"
                                label="Start Year"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register(
                                    `education.${index}.startDate`
                                )}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <TextField
                                fullWidth
                                type="text"
                                label="End Year"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                {...register(
                                    `education.${index}.endDate`
                                )}
                            />
                        </Grid>

                    </Grid>

                </Paper>

            ))}

        </Paper>
    );
};

export default EducationFormSection;