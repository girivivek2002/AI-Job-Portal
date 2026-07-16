import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";

const WorkInProgress = ({
    title = "Work in Progress",
    description = "This page is currently under development. We're working hard to bring this feature to you soon.",
}) => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    minHeight: "75vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    py: 4,
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        width: "100%",
                        p: { xs: 4, sm: 6 },
                        borderRadius: 4,
                        border: "1px solid",
                        borderColor: "divider",
                        textAlign: "center",
                    }}
                >
                    <Stack spacing={3} alignItems="center">
                        <Box
                            sx={{
                                width: 90,
                                height: 90,
                                borderRadius: "50%",
                                bgcolor: "primary.main",
                                color: "primary.contrastText",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <ConstructionRoundedIcon sx={{ fontSize: 42 }} />
                        </Box>

                        <Typography
                            variant="h4"
                            fontWeight={700}
                            sx={{
                                fontSize: {
                                    xs: "1.8rem",
                                    sm: "2.2rem",
                                },
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                maxWidth: 520,
                                mx: "auto",
                                fontSize: {
                                    xs: "0.95rem",
                                    sm: "1rem",
                                },
                            }}
                        >
                            {description}
                        </Typography>

                        <Button
                            variant="contained"
                            startIcon={<ArrowBackRoundedIcon />}
                            onClick={() => navigate(-1)}
                        >
                            Go Back
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </Container>
    );
};

export default WorkInProgress;