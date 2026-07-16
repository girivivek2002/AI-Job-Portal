import {
    Box,
    Button,
    Chip,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import formatRelativeDate from "../../../utils/formatRelativeDate";

const statusColor = {
    APPLIED: "info",
    SHORTLISTED: "success",
    INTERVIEW: "warning",
    REJECTED: "error",
    HIRED: "success",
};

const RecentApplications = () => {

    const navigate = useNavigate();

    const { applications } = useSelector(
        (state) => state.applications
    );

    const recentApplications = applications.slice(0, 5);

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
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
                    mb: 2,
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight={600}
                >
                    Recent Applications
                </Typography>

                <Button
                    endIcon={<ArrowForwardRoundedIcon />}
                    onClick={() =>
                        navigate("/candidate/applications")
                    }
                >
                    View All
                </Button>
            </Box>

            {recentApplications.length === 0 ? (
                <Typography color="text.secondary">
                    You haven't applied to any jobs yet.
                </Typography>
            ) : (
                <List disablePadding>
                    {recentApplications.map((application) => (
                        <ListItem
                            key={application._id}
                            divider
                            sx={{
                                px: 0,
                                cursor: "pointer",
                            }}
                            onClick={() =>
                                navigate(
                                    `/candidate/applications/${application._id}`
                                )
                            }
                        >
                            <ListItemText
                                primary={
                                    <Typography fontWeight={600}>
                                        {application.jobId.title}
                                    </Typography>
                                }
                                secondary={`Applied ${formatRelativeDate(
                                    application.createdAt
                                )}`}
                            />

                            <Chip
                                label={application.status}
                                color={
                                    statusColor[
                                    application.status
                                    ] || "default"
                                }
                                size="small"
                            />
                        </ListItem>
                    ))}
                </List>
            )}
        </Paper>
    );
};

export default RecentApplications;
