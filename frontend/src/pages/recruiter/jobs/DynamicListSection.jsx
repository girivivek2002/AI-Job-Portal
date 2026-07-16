import {
    Box,
    Button,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import { Controller, useFieldArray } from "react-hook-form";

const DynamicListSection = ({
    title,
    name,
    control,
}) => {

    const {
        fields,
        append,
        remove,
    } = useFieldArray({
        control,
        name,
    });

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
                    mb: 3,
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight={600}
                >
                    {title}
                </Typography>

                <Button
                    variant="outlined"
                    startIcon={<AddRoundedIcon />}
                    onClick={() => append("")}
                >
                    Add
                </Button>
            </Box>

            <Stack spacing={2}>

                {fields.map((field, index) => (

                    <Box
                        key={field.id}
                        sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                            width: "100%",
                        }}
                    >
                        <Controller
                            control={control}
                            name={`${name}.${index}`}
                            render={({ field }) => (

                                <TextField
                                    {...field}
                                    fullWidth
                                    multiline
                                    minRows={2}
                                    maxRows={6}
                                    label={`${title} ${index + 1}`}
                                    sx={{
                                        flex: 1,
                                    }}
                                />

                            )}
                        />

                        <IconButton
                            color="error"
                            onClick={() => remove(index)}
                            sx={{
                                flexShrink: 0,
                                mt: 1,
                            }}
                        >
                            <DeleteOutlineRoundedIcon />
                        </IconButton>

                    </Box>

                ))}

            </Stack>

        </Paper>
    );
};

export default DynamicListSection;