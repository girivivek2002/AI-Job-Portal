import { forwardRef, useState } from "react";
import {
    TextField,
    IconButton,
    InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordField = forwardRef(
    (
        {
            label,
            error,
            helperText,
            name,
            onBlur,
            onChange,
            value,
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <TextField
                fullWidth
                label={label}
                type={showPassword ? "text" : "password"}
                error={error}
                helperText={helperText}
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                inputRef={ref}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onClick={() =>
                                        setShowPassword((prev) => !prev)
                                    }
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        );
    }
);

PasswordField.displayName = "PasswordField";

export default PasswordField;