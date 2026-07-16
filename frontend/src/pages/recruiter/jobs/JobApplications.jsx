import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";

import {
    Avatar,
    Box,
    Chip,
    IconButton,
    Typography,
} from "@mui/material";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { useNavigate } from "react-router-dom";

import { getJobApplicationAllThunk } from "../../../features/recruiterApplications/recruiterApplicationsThunk";

import formatRelativeDate from "../../../utils/formatRelativeDate";

const statusColor = {
    APPLIED: "info",
    SHORTLISTED: "success",
    INTERVIEW: "warning",
    REJECTED: "error",
    HIRED: "success",
};

const JobApplications = ({ selectedJob }) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {
        applications,
        isLoading,
    } = useSelector(
        state => state.recruiterApplications
    );

    const jobId = selectedJob?._id;

    useEffect(() => {

        if (jobId) {
            dispatch(
                getJobApplicationAllThunk(jobId)
            );
        }

    }, [dispatch, jobId]);

    if (!selectedJob) return null;

    const columns = [

        {
            field: "candidate",
            headerName: "Candidate",
            flex: 2,
            minWidth: 280,
            sortable: false,

            renderCell: (params) => {

                const candidate = params.row.candidateId;

                return (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 42,
                                height: 42,
                                fontWeight: 600,
                            }}
                        >
                            {candidate?.bio?.name?.charAt(0)?.toUpperCase()}
                        </Avatar>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                overflow: "hidden",
                                width: "100%",
                                minWidth: 0,
                            }}
                        >
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                noWrap
                                sx={{
                                    lineHeight: 1.2,
                                    mb: 0.2,
                                }}
                            >
                                {candidate?.bio?.name}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="text.secondary"
                                noWrap
                                sx={{
                                    lineHeight: 1.1,
                                }}
                            >
                                {candidate?.bio?.email}
                            </Typography>
                        </Box>
                    </Box>
                );
            },
        },

        {
            field: "atsScore",
            headerName: "ATS",
            width: 100,
        },

        {
            field: "score",
            headerName: "AI Score",
            width: 110,

            valueGetter: (_, row) =>
                row.aiAnalysis?.score ?? "-",
        },

        {
            field: "status",
            headerName: "Status",
            width: 150,

            renderCell: (params) => (

                <Chip
                    size="small"
                    label={params.value}
                    color={
                        statusColor[
                        params.value
                        ]
                    }
                />

            ),
        },

        {
            field: "createdAt",
            headerName: "Applied",
            flex: 1,

            valueGetter: (_, row) =>
                formatRelativeDate(
                    row.createdAt
                ),
        },

        {
            field: "actions",
            headerName: "Actions",
            width: 120,
            sortable: false,

            renderCell: (params) => (

                <IconButton
                    onClick={() =>
                        navigate(
                            `/recruiter/applications/${params.row._id}`
                        )
                    }
                >

                    <VisibilityOutlinedIcon />

                </IconButton>

            ),
        },

    ];

    return (

        <Box
            sx={{
                height: 650,
            }}
        >

            <DataGrid
                rows={applications}
                columns={columns}
                getRowId={(row) => row._id}
                loading={isLoading}
                disableRowSelectionOnClick
                rowHeight={72}
                pageSizeOptions={[10, 20]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}

            />

        </Box>

    );

};

export default JobApplications;