import {
    Box,
    Button,
    Grid,
} from "@mui/material";

import ProfileHeader from "../../components/candidate/profile/ProfileHeader";
import ResumeCard from "../../components/candidate/profile/ResumeCard";
import SummarySection from "../../components/candidate/profile/SummarySection";
import SkillsSection from "../../components/candidate/profile/SkillsSection";
import ExperienceSection from "../../components/candidate/profile/ExperienceSection";
import EducationSection from "../../components/candidate/profile/EducationSection";
import ProjectsSection from "../../components/candidate/profile/ProjectsSection";
import CertificateSection from "../../components/candidate/profile/CertificateSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCandidateProfileThunk, getResumeThunk } from "../../features/profile/profileThunk";
import { useNavigate } from "react-router-dom";
import PersonalInfoCard from "../../components/candidate/profile/PersonalInfoCard";


const ProfilePage = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getCandidateProfileThunk());


        dispatch(getResumeThunk());



    }, [dispatch]);



    return (

        <Box>

            <ProfileHeader />

            <PersonalInfoCard />

            <Grid container spacing={3}>

                <Grid size={{ xs: 12, lg: 4 }}>
                    <ResumeCard />
                </Grid>

                <Grid size={{ xs: 12, lg: 8 }}>



                    <SummarySection />

                    <SkillsSection />

                    <ExperienceSection />

                    <EducationSection />

                    <ProjectsSection />
                    <CertificateSection />

                </Grid>
                <Button onClick={() => navigate("/candidate/profile/edit")}>Update Profile</Button>

            </Grid>

        </Box>

    );

};

export default ProfilePage;