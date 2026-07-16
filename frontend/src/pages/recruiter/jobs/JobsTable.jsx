import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import {
    Box,
    Button,
    Chip,
    IconButton,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import { toast } from "react-toastify";

import DeleteJobDialog from "./DeleteJobDialog";
import { deleteJobThunk } from "../../../features/jobs/jobsThunk";


const JobsTable = ({
    jobs = [],
    pagination,
    page,
    onPageChange,
}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openDelete, setOpenDelete] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down("md")
    );

    const handleDelete = async () => {

        if (!selectedJob) return;

        try {

            await dispatch(
                deleteJobThunk(selectedJob._id)
            ).unwrap();

            toast.success("Job deleted successfully.");

            setOpenDelete(false);
            setSelectedJob(null);

        } catch (error) {

            toast.error(error || "Failed to delete job.");

        }

    };

    const columns = [
        {
            field: "title",
            headerName: "Job Title",
            flex: 1.5,
            minWidth: 220,

            renderCell: (params) => (

                <Typography
                    sx={{
                        cursor: "pointer",
                        color: "primary.main",
                        fontWeight: 600,

                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                    onClick={() =>
                        navigate(
                            `/recruiter/jobs/${params.row._id}`
                        )
                    }
                >
                    {params.value}
                </Typography>

            ),
        },

        {
            field: "location",
            headerName: "Location",
            flex: 1,
            minWidth: 150,
        },

        {
            field: "employmentType",
            headerName: "Employment",
            flex: 1,
            minWidth: 160,

            renderCell: (params) =>
                params.value?.replaceAll("_", " "),
        },

        {
            field: "applicationsCount",
            headerName: "Applications",
            width: 140,
        },

        {
            field: "status",
            headerName: "Status",
            width: 120,

            renderCell: (params) => (

                <Chip
                    label={params.value}
                    size="small"
                    color={
                        params.value === "OPEN"
                            ? "success"
                            : "error"
                    }
                />

            ),
        },

        {
            field: "actions",
            headerName: "Actions",
            width: 130,
            sortable: false,
            filterable: false,

            renderCell: (params) => (

                <Box>

                    <IconButton
                        onClick={() =>
                            navigate(
                                `/recruiter/jobs/${params.row._id}/edit`
                            )
                        }
                    >
                        <EditOutlinedIcon />
                    </IconButton>

                    <IconButton
                        color="error"
                        onClick={() => {

                            setSelectedJob(params.row);
                            setOpenDelete(true);

                        }}
                    >
                        <DeleteOutlineRoundedIcon />
                    </IconButton>

                </Box>

            ),
        },
    ];

    if (isMobile) {

        return (
            <>
                <Stack spacing={2}>

                    {jobs.map((job) => (

                        <Paper
                            key={job._id}
                            elevation={0}
                            sx={{
                                p: 2,
                                border: 1,
                                borderColor: "divider",
                                borderRadius: 3,
                            }}
                        >

                            <Typography
                                variant="h6"
                                fontWeight={700}
                                sx={{
                                    cursor: "pointer",
                                    color: "primary.main",
                                }}
                                onClick={() =>
                                    navigate(
                                        `/recruiter/jobs/${job._id}`
                                    )
                                }
                            >
                                {job.title}
                            </Typography>

                            <Typography
                                color="text.secondary"
                                mt={1}
                            >
                                📍 {job.location}
                            </Typography>

                            <Typography
                                color="text.secondary"
                            >
                                {job.employmentType.replaceAll("_", " ")}
                            </Typography>

                            <Typography mt={1}>
                                Applications: {job.applicationsCount}
                            </Typography>

                            <Chip
                                sx={{ mt: 2 }}
                                size="small"
                                label={job.status}
                                color={
                                    job.status === "OPEN"
                                        ? "success"
                                        : "error"
                                }
                            />

                            <Stack
                                direction="row"
                                spacing={1}
                                mt={2}
                            >

                                <Button
                                    variant="outlined"
                                    onClick={() =>
                                        navigate(
                                            `/recruiter/jobs/${job._id}/edit`
                                        )
                                    }
                                >
                                    Edit
                                </Button>

                                <Button
                                    color="error"
                                    variant="outlined"
                                    onClick={() => {

                                        setSelectedJob(job);

                                        setOpenDelete(true);

                                    }}
                                >
                                    Delete
                                </Button>

                            </Stack>

                        </Paper>

                    ))}

                </Stack>

                <DeleteJobDialog
                    open={openDelete}
                    jobTitle={selectedJob?.title}
                    onClose={() => {
                        setOpenDelete(false);
                        setSelectedJob(null);
                    }}
                    onConfirm={handleDelete}
                />
            </>
        );

    }

    return (
        <>
            <Box
                sx={{
                    height: 650,
                    bgcolor: "background.paper",
                    borderRadius: 3,
                }}
            >
                <DataGrid
                    rows={jobs}
                    columns={columns}
                    getRowId={(row) => row._id}
                    disableRowSelectionOnClick
                    paginationMode="server"
                    rowCount={pagination?.totalJobs || 0}
                    pageSizeOptions={[5, 10, 20]}

                    paginationModel={{
                        page: page - 1,
                        pageSize: pagination?.limit || 10,
                    }}

                    onPaginationModelChange={(model) => {
                        onPageChange(model.page + 1);
                    }}
                />
            </Box>

            <DeleteJobDialog
                open={openDelete}
                loading={false}
                jobTitle={selectedJob?.title}
                onClose={() => {

                    setOpenDelete(false);
                    setSelectedJob(null);

                }}
                onConfirm={handleDelete}
            />
        </>
    );
};

export default JobsTable;