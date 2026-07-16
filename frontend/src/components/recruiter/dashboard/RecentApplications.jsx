import {
    Avatar,
    Box,
    Chip,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography,
    Button,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
        case "shortlisted":
            return "success";
        case "reviewing":
            return "warning";
        case "rejected":
            return "error";
        default:
            return "default";
    }
};

const RecentApplications = ({ applications = [] }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: 1,
                borderColor: "divider",
                height: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    Recent Applications
                </Typography>

                <Button
                    component={RouterLink}
                    to="/recruiter/applications"
                    size="small"
                >
                    View All
                </Button>
            </Box>

            <List disablePadding>
                {applications.length > 0 ? (
                    applications.map((application) => (
                        <ListItem
                            key={application._id}
                            divider
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    {application.candidate?.name?.[0]}
                                </Avatar>
                            </ListItemAvatar>

                            <ListItemText
                                primary={application.candidate?.name}
                                secondary={application.job?.title}
                            />

                            <Chip
                                label={application.status}
                                color={getStatusColor(application.status)}
                                size="small"
                            />
                        </ListItem>
                    ))
                ) : (
                    <Typography
                        color="text.secondary"
                        align="center"
                    >
                        No recent applications.
                    </Typography>
                )}
            </List>
        </Paper>
    );
};

export default RecentApplications;