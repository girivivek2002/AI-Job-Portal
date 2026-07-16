import { useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import PasswordField from "./PasswordField";
import RoleSelector from "./RoleSelector";
import { registerUser } from "../../features/auth/authThunk";
import { registerSchema } from "../../validations/registerSchema";



const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "candidate",
            terms: false,
        },
    });

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const onSubmit = async (data) => {
        const { confirmPassword, terms, ...payload } = data;

        const result = await dispatch(registerUser(payload));

        console.log(result)

        if (registerUser.fulfilled.match(result)) {
            toast.success("Account created successfully.");

            navigate("/login");
        }
    };

    return (
        <Box
            sx={{

                p: {
                    xs: 3,
                    sm: 5,
                },
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
            >
                Create Account
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                mb={4}
            >
                Join SmartHire and start your hiring journey.
            </Typography>

            <Stack
                spacing={3}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    label="Full Name"
                    {...register("name")}
                    error={!!errors.fullName}
                    helperText={errors.fullName?.message}
                />

                <TextField
                    label="Email Address"
                    type="email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <PasswordField
                    label="Password"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />

                <PasswordField
                    label="Confirm Password"
                    {...register("confirmPassword")}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                />

                <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                        <RoleSelector
                            value={field.value}
                            onChange={field.onChange}
                        />
                    )}
                />

                <Controller
                    name="terms"
                    control={control}
                    render={({ field }) => (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={field.value}
                                    onChange={(e) =>
                                        field.onChange(e.target.checked)
                                    }
                                />
                            }
                            label="I agree to the Terms & Conditions"
                        />
                    )}
                />

                {errors.terms && (
                    <Typography
                        variant="caption"
                        color="error"
                    >
                        {errors.terms.message}
                    </Typography>
                )}

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isLoading}
                >
                    {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                <Typography
                    sx={{
                        textAlign: "center",
                    }}
                    variant="body2"
                >
                    Already have an account?{" "}
                    <Link
                        component={RouterLink}
                        to="/login"
                        underline="hover"
                    >
                        Sign In
                    </Link>
                </Typography>
            </Stack>
        </Box>
    );
};

export default RegisterForm;