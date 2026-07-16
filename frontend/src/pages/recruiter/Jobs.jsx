import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Box,
    CircularProgress,
} from "@mui/material";

import JobToolbar from "./jobs/JobToolbar";

import { getRecruiterJobsThunk } from "../../features/jobs/jobsThunk";
import JobsTable from "./jobs/JobsTable";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce.js";






const Jobs = () => {

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const debouncedSearch = useDebounce(search, 1000);

    const {
        jobs,
        pagination,
        isLoading,
    } = useSelector((state) => state.jobs);

    useEffect(() => {

        dispatch(
            getRecruiterJobsThunk({
                search: debouncedSearch,
                status,
                page,
                limit: 10
            })
        );

    }, [dispatch, debouncedSearch, status, page]);

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 8,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <JobToolbar
                search={search}
                status={status}
                onSearchChange={setSearch}
                onStatusChange={setStatus}
                onCreateJob={() =>
                    navigate("/recruiter/jobs/create")
                }
            />

            <JobsTable
                jobs={jobs}
                pagination={pagination}
                page={page}
                onPageChange={setPage}
            />
        </>
    );
};

export default Jobs;