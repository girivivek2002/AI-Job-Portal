import { Box, Container, Grid, Paper } from "@mui/material";
import AuthSidePanel from "../../components/auth/AuthSidePanel";
import RegisterForm from "../../components/auth/RegisterForm";


const RegisterPage = () => {
    return (
        <Box
            sx={{
                minHeight: "90vh",
                bgcolor: "background.default",
                display: "flex",
                alignItems: "center",
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Paper
                    elevation={0}
                    sx={{
                        overflow: "hidden",
                        borderRadius: 4,
                        bgcolor: "background.paper",
                    }}
                >
                    <Grid container>
                        {/* Left Side */}
                        <Grid
                            size={{ xs: 0, md: 6 }}
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                },
                            }}
                        >
                            <AuthSidePanel />
                        </Grid>

                        {/* Right Side */}
                        <Grid
                            size={{ xs: 12, md: 6 }}
                        >
                            <RegisterForm />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default RegisterPage;