import {
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Chip,
    Button,
    Box,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
        case "active":
            return "success";
        case "closed":
            return "error";
        case "draft":
            return "warning";
        default:
            return "default";
    }
};

const RecentJobs = ({ jobs = [] }) => {
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
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    Recent Jobs
                </Typography>

                <Button
                    component={RouterLink}
                    to="/recruiter/jobs"
                    size="small"
                >
                    View All
                </Button>
            </Box>

            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Job</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">
                                Applications
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <TableRow key={job._id}>
                                    <TableCell>
                                        {job.title}
                                    </TableCell>

                                    <TableCell>
                                        <Chip
                                            label={job.status}
                                            color={getStatusColor(job.status)}
                                            size="small"
                                        />
                                    </TableCell>

                                    <TableCell align="right">
                                        {job.applicationCount || 0}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={3}
                                    align="center"
                                >
                                    No jobs found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default RecentJobs;