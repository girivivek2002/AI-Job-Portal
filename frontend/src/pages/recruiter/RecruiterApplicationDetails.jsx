import {
    Box,
    CircularProgress,
    Grid,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";




import { getApplicationDetailsThunk } from "../../features/recruiterApplications/recruiterApplicationsThunk";
import CandidateHeader from "../../components/recruiter/applications/CandidateHeader";
import ScoreCards from "../../components/recruiter/applications/ScoreCards";
import ResumeCard from "../../components/recruiter/applications/ResumeCard";
import AISummaryCard from "../../components/recruiter/applications/AISummaryCard";

const RecruiterApplicationDetails = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const {
        selectedApplication,
        isLoading,
    } = useSelector(
        state => state.recruiterApplications
    );

    console.log(selectedApplication)

    useEffect(() => {

        dispatch(
            getApplicationDetailsThunk(id)
        );

    }, [dispatch, id]);

    if (
        isLoading ||
        !selectedApplication
    ) {

        return <CircularProgress />;

    }

    return (

        <Box>

            <CandidateHeader
                candidate={selectedApplication.candidateId}
                status={selectedApplication.status}
                appliedAt={selectedApplication.createdAt}
            />

            <Grid
                container
                spacing={3}
            >

                <Grid
                    size={{
                        xs: 12,
                        md: 8,
                    }}
                >

                    <ScoreCards
                        atsScore={selectedApplication.atsScore}
                        aiAnalysis={selectedApplication.aiAnalysis}
                    />

                    <AISummaryCard
                        aiAnalysis={selectedApplication.aiAnalysis}
                    />

                </Grid>

                <Grid
                    size={{
                        xs: 12,
                        md: 4,
                    }}
                >

                    <ResumeCard
                        selectedApplication={selectedApplication}
                    />

                    {/* <StatusCard
                        application={selectedApplication}
                    /> */}

                </Grid>

            </Grid>

        </Box>

    );

};

export default RecruiterApplicationDetails;