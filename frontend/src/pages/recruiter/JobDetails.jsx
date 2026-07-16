import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
    Box,
    CircularProgress,
} from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

import { getJobByIdThunk } from "../../features/jobs/jobsThunk";
import JobHeader from "./jobs/JobHeader";
import JobOverview from "./jobs/JobOverview";
import SkillsCard from "./jobs/SkillsCard";
import DescriptionCard from "./jobs/DescriptionCard";
import ListCard from "./jobs/ListCard";
import JobApplications from "./jobs/JobApplications";



const JobDetails = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const [tab, setTab] = useState(0);

    const {
        selectedJob,
        isLoading,
    } = useSelector(
        (state) => state.jobs
    );


    useEffect(() => {

        dispatch(getJobByIdThunk(id));

    }, [dispatch, id]);

    if (isLoading || !selectedJob) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 10,
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>

            <JobHeader
                job={selectedJob}
            />
            <Tabs
                value={tab}
                onChange={(_, value) => setTab(value)}
                sx={{ mb: 3 }}
            >
                <Tab label="Job Details" />
                <Tab
                    label={`Applications (${selectedJob.applicationsCount})`}
                />
            </Tabs>


            {tab === 0 && (
                <>
                    <JobOverview
                        job={selectedJob}
                    />

                    <SkillsCard
                        title="Required Skills"
                        skills={selectedJob.requiredSkills}
                    />

                    <SkillsCard
                        title="Preferred Skills"
                        skills={selectedJob.preferredSkills}
                    />

                    <ListCard
                        title="Requirements"
                        items={selectedJob.requirements}
                    />

                    <ListCard
                        title="Responsibilities"
                        items={selectedJob.responsibilities}
                    />

                    <DescriptionCard
                        description={selectedJob.description}
                    />
                </>
            )}

            {tab === 1 && (
                <JobApplications selectedJob={selectedJob} />
            )}

        </Box>
    );

};

export default JobDetails;