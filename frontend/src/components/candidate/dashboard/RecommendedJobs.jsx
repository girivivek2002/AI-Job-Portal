import {
    Box,
    Button,
    Chip,
    List,
    ListItem,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const RecommendedJobs = () => {

    const navigate = useNavigate();

    const { allJobs } = useSelector(
        (state) => state.candidate
    );

    const recommendedJobs = allJobs.slice(0, 5);

    if (recommendedJobs.length === 0) return null;

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
                    Recommended Jobs
                </Typography>

                <Button
                    endIcon={<ArrowForwardRoundedIcon />}
                    onClick={() =>
                        navigate("/candidate/jobs")
                    }
                >
                    View All
                </Button>

            </Box>

            {recommendedJobs.length === 0 ? (

                <Typography color="text.secondary">
                    No jobs available.
                </Typography>

            ) : (

                <List disablePadding>

                    {recommendedJobs.map((job) => (

                        <ListItem
                            key={job._id}
                            divider
                            sx={{
                                px: 0,
                                py: 1.5,
                                cursor: "pointer",
                                transition: "all 0.2s ease",



                                "&:hover .job-title": {
                                    color: "primary.main",
                                },
                            }}
                            onClick={() =>
                                navigate(`/candidate/jobs/${job._id}`)
                            }
                        >

                            <ListItemText
                                primary={
                                    <Typography
                                        className="job-title"
                                        fontWeight={600}
                                        sx={{
                                            transition: "color 0.2s ease",
                                        }}
                                    >
                                        {job.title}
                                    </Typography>
                                }
                                secondary={
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        sx={{ mt: 0.5 }}
                                    >

                                        <Stack
                                            direction="row"
                                            spacing={0.5}
                                            alignItems="center"
                                        >

                                            <LocationOnOutlinedIcon
                                                fontSize="small"
                                            />

                                            <Typography
                                                variant="caption"
                                            >
                                                {job.location || "Remote"}
                                            </Typography>

                                        </Stack>

                                        <Stack
                                            direction="row"
                                            spacing={0.5}
                                            alignItems="center"
                                        >

                                            <WorkOutlineRoundedIcon
                                                fontSize="small"
                                            />

                                            <Typography
                                                variant="caption"
                                            >
                                                {job.employmentType.replaceAll("_", " ")}
                                            </Typography>

                                        </Stack>

                                    </Stack>
                                }
                            />

                            <Chip
                                size="small"
                                label="Open"
                                color="success"
                            />

                        </ListItem>

                    ))}

                </List>

            )}

        </Paper>

    );

};

export default RecommendedJobs;