import { Box, Container, Grid, Paper } from "@mui/material";
import AuthSidePanel from "../../components/auth/AuthSidePanel";
import LoginForm from "../../components/auth/LoginForm";


const LoginPage = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
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
                    }}
                >
                    <Grid container>
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

                        <Grid
                            size={{ xs: 12, md: 6 }}
                        >
                            <LoginForm />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default LoginPage;