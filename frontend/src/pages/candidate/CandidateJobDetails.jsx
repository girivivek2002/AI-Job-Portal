import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getJobByIdThunk } from "../../features/candidate/candidateThunk";
import { getJobApplicationThunk } from "../../features/applications/applicationsThunk";

import CandidateJobHeader from "../../components/candidate/jobs/CandidateJobHeader";
import JobOverview from "./JobOverview";

import SkillsCard from "../recruiter/jobs/SkillsCard";
import ListCard from "../recruiter/jobs/ListCard";
import DescriptionCard from "../recruiter/jobs/DescriptionCard";

const CandidateJobDetails = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const {
        selectedJob,
        isLoading,
    } = useSelector(state => state.candidate);

    useEffect(() => {

        dispatch(getJobByIdThunk(id));

        dispatch(getJobApplicationThunk(id));

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

            <CandidateJobHeader job={selectedJob} />

            <JobOverview job={selectedJob} />

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

        </Box>
    );
};

export default CandidateJobDetails;