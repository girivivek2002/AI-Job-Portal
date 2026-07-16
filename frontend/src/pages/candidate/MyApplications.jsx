import {
    Grid,
    Typography,
} from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyApplicationsThunk } from "../../features/applications/applicationsThunk";
import ApplicationCard from "../../components/candidate/applications/ApplicationCard"




const MyApplications = () => {

    const dispatch = useDispatch();

    const {
        applications,
    } = useSelector(
        state => state.applications
    );

    useEffect(() => {

        dispatch(
            getMyApplicationsThunk()
        );

    }, [dispatch]);

    return (

        <>

            <Typography
                variant="h4"
                fontWeight={700}
                mb={3}
            >
                My Applications
            </Typography>

            <Grid
                container
                spacing={3}
            >

                {applications.map(application => (

                    <Grid
                        key={application._id}
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >

                        <ApplicationCard
                            application={application}
                        />

                    </Grid>

                ))}

            </Grid>

        </>

    );

};

export default MyApplications;