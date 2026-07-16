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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { loginSchema } from "../../validations/loginSchema";
import PasswordField from "./PasswordField";
import { loginUser } from "../../features/auth/authThunk";



const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        isLoading,
        error,
        user,
        isAuthenticated,
    } = useSelector(
        (state) => state.auth
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    useEffect(() => {

        if (error) {
            toast.error(error);
        }

    }, [error]);

    useEffect(() => {

        if (!isAuthenticated || !user) return;

        toast.success("Welcome back!");

        if (user.role === "recruiter") {
            navigate("/recruiter/dashboard");
        } else {
            navigate("/candidate/dashboard");
        }

    }, [isAuthenticated, user, navigate]);

    const onSubmit = (data) => {
        dispatch(loginUser(data));
    };

    return (
        <Box
            sx={{
                p: {
                    xs: 4,
                    md: 6,
                },
            }}
        >
            <Typography
                variant="h4"
                fontWeight={700}
                gutterBottom
            >
                Welcome Back 👋
            </Typography>

            <Typography
                color="text.secondary"
                mb={4}
            >
                Sign in to continue to HireMind AI.
            </Typography>

            <Stack
                spacing={3}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    label="Email Address"
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

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Remember Me"
                    />

                    <Link
                        component={RouterLink}
                        to="/forgot-password"
                        underline="hover"
                    >
                        Forgot Password?
                    </Link>
                </Box>

                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isLoading}
                >
                    {isLoading
                        ? "Signing In..."
                        : "Sign In"}
                </Button>

                <Typography
                    sx={{
                        textAlign: "center",
                    }}
                >
                    Don't have an account?{" "}
                    <Link
                        component={RouterLink}
                        to="/register"
                    >
                        Create Account
                    </Link>
                </Typography>
            </Stack>
        </Box>
    );
};

export default LoginForm;