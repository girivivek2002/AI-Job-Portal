import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Box, Button, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

// import { profileSchema } from "../../../validations/profileSchema";
// import { updateProfileThunk } from "../../../features/profile/profileThunk";

import PersonalInfoSection from "./PersonalInfoSection";
import SummaryFormSection from "./SummaryFormSection";
import SkillsInputSection from "./SkillsInputSection";
import { profileSchema } from "../../../validations/profileSchema";
import { updateProfileThunk } from "../../../features/profile/profileThunk";
import { updateProfile } from "../../../features/profile/profile.api";
import ExperienceFormSection from "./ExperienceFormSection";
import EducationFormSection from "./EducationFormSection";
import ProjectFormSection from "./ProjectFormSection";
import CertificateFormSection from "./CertificateFormSection";

const EditProfileForm = () => {

    const dispatch = useDispatch();

    const {
        profile,
        isLoading,
    } = useSelector(
        state => state.profile
    );

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: {
            errors,
        },
    } = useForm({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            bio: {
                name: "",
                email: "",
                phone: "",
                title: "",
                description: "",
            },
            skills: [],
            experience: 0,
            experiences: [],
            education: [],
            projects: [],
            certifications: [],
        },
    });

    useEffect(() => {

        if (profile) {

            reset(profile);

        }

    }, [profile, reset]);

    const onSubmit = async (data) => {
        console.log("Submitted", data);

        const response = await updateProfile(data);

        console.log(response);
    };

    return (

        <Box
            component="form"
            onSubmit={handleSubmit(
                onSubmit,
                (errors) => console.log(errors)
            )}
        >
            <Typography variant="h5" mb={3}>Edit Profile</Typography>
            <PersonalInfoSection
                register={register}
                errors={errors}
            />

            <SummaryFormSection
                register={register}
                errors={errors}
            />

            <SkillsInputSection
                control={control}
            />
            <ExperienceFormSection
                register={register}
                errors={errors}
            />

            <EducationFormSection
                control={control}
                register={register}
                errors={errors}
            />
            <ProjectFormSection
                control={control}
                register={register}
                errors={errors}
            />

            <CertificateFormSection
                control={control}
                register={register}
                errors={errors}
            />

            <LoadingButton
                loading={isLoading}
                type="submit"
                variant="contained"
                sx={{
                    mt: 3,
                }}
            >
                Save Changes
            </LoadingButton>

        </Box>

    );

};

export default EditProfileForm;