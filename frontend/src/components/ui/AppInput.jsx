import { TextField } from "@mui/material";

const AppInput = ({
    label,
    error,
    helperText,
    ...props
}) => {
    return (
        <TextField
            fullWidth
            margin="normal"
            label={label}
            error={error}
            helperText={helperText}
            {...props}
        />
    );
};

export default AppInput;