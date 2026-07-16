import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { getAllJobsThunk } from "../../features/candidate/candidateThunk";
import JobFilters from "../../components/candidate/jobs/JobFilters"
import CandidateJobCard from "../../components/candidate/jobs/CandidateJobCard"



const BrowseJobs = () => {

    const dispatch = useDispatch();

    const {
        allJobs,
        isLoading,
    } = useSelector(
        (state) => state.candidate
    );

    const [search, setSearch] = useState("");
    const [employmentType, setEmploymentType] = useState("");

    useEffect(() => {

        dispatch(getAllJobsThunk());

    }, [dispatch]);

    const filteredJobs = allJobs.filter((job) => {

        const matchesSearch =
            job.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesEmployment =
            employmentType === "" ||
            job.employmentType === employmentType;

        return matchesSearch && matchesEmployment;

    });

    return (
        <>
            <Typography
                variant="h4"
                fontWeight={700}
                mb={3}
            >
                Browse Jobs
            </Typography>

            <JobFilters
                search={search}
                setSearch={setSearch}
                employmentType={employmentType}
                setEmploymentType={setEmploymentType}
            />

            <Grid
                container
                spacing={3}
            >
                {filteredJobs.map((job) => (

                    <Grid
                        key={job._id}
                        size={{
                            xs: 12,
                            md: 6,
                            lg: 4,
                        }}
                    >
                        <CandidateJobCard
                            job={job}
                        />
                    </Grid>

                ))}
            </Grid>
        </>
    );

};

export default BrowseJobs;