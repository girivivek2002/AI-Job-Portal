import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import {
    ArrowForwardRounded,
    CalendarTodayOutlined,
    LocationOnOutlined,
    WorkOutlineRounded,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import formatRelativeDate from "../../../utils/formatRelativeDate";

const statusColor = {
    APPLIED: "info",
    SHORTLISTED: "success",
    INTERVIEW: "warning",
    REJECTED: "error",
    HIRED: "success",
};

const ApplicationCard = ({ application }) => {

    const navigate = useNavigate();

    const job = application.jobId;

    return (
        <Card
            elevation={0}
            sx={{
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
                transition: "0.2s",
                "&:hover": {
                    borderColor: "primary.main",
                    boxShadow: 3,
                    transform: "translateY(-3px)",
                },
            }}
        >
            <CardContent>

                <Typography
                    variant="h6"
                    fontWeight={700}
                >
                    {job.title}
                </Typography>

                <Stack
                    direction="row"
                    spacing={3}
                    mt={2}
                    flexWrap="wrap"
                    useFlexGap
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >
                        <LocationOnOutlined
                            fontSize="small"
                            color="action"
                        />

                        <Typography variant="body2">
                            {job.location || "Remote"}
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >
                        <WorkOutlineRounded
                            fontSize="small"
                            color="action"
                        />

                        <Typography variant="body2">
                            {job.employmentType.replaceAll("_", " ")}
                        </Typography>
                    </Stack>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    mb={2}
                >
                    <CalendarTodayOutlined
                        sx={{
                            fontSize: 18,
                            color: "text.secondary",
                        }}
                    />

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Applied {formatRelativeDate(application.createdAt)}
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Chip
                        label={application.status}
                        color={
                            statusColor[
                            application.status
                            ]
                        }
                        sx={{
                            fontWeight: 600,
                        }}
                    />

                    <Button
                        endIcon={<ArrowForwardRounded />}
                        onClick={() =>
                            navigate(
                                `/candidate/jobs/${application.jobId._id}`
                            )
                        }
                    >
                        View Details
                    </Button>
                </Box>

            </CardContent>
        </Card>
    );
};

export default ApplicationCard;