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

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

import { useNavigate } from "react-router-dom";

import formatRelativeDate from "../../../utils/formatRelativeDate";

const CandidateJobCard = ({ job }) => {

    const navigate = useNavigate();

    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
                transition: ".25s",

                "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-5px)",
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
                    spacing={1.5}
                    sx={{ mt: 2 }}
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >
                        <LocationOnOutlinedIcon
                            fontSize="small"
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
                        <WorkOutlineRoundedIcon
                            fontSize="small"
                        />

                        <Typography variant="body2">
                            {job.employmentType.replaceAll("_", " ")}
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >
                        <PaymentsOutlinedIcon
                            fontSize="small"
                        />

                        <Typography variant="body2">
                            ₹{job.salaryMin?.toLocaleString()} - ₹{job.salaryMax?.toLocaleString()}
                        </Typography>
                    </Stack>
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        width: "100%",
                    }}
                >
                    {job.requiredSkills
                        ?.slice(0, 4)
                        .map((skill) => (

                            <Chip
                                key={skill}
                                label={skill}
                                size="small"
                                variant="outlined"
                                sx={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    "& .MuiChip-label": {
                                        display: "block",
                                        whiteSpace: "normal",
                                        wordBreak: "break-word",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        textAlign: "center",
                                    },
                                }}
                            />

                        ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                    >
                        <AccessTimeRoundedIcon
                            fontSize="small"
                        />

                        <Typography
                            variant="caption"
                        >
                            {formatRelativeDate(job.createdAt)}
                        </Typography>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={1}
                    >
                        <Button
                            size="small"
                            onClick={() =>
                                navigate(
                                    `/candidate/jobs/${job._id}`
                                )
                            }
                        >
                            View
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                        >
                            Apply
                        </Button>
                    </Stack>
                </Box>

            </CardContent>
        </Card>
    );

};

export default CandidateJobCard;