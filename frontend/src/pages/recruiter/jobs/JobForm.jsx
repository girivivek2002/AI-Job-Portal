import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Box,
    Button,
    Grid,
} from "@mui/material";
import { toast } from "react-toastify";
import { Controller } from "react-hook-form";

import SkillsInput from "./SkillsInput";

import BasicInformationSection from "./BasicInformationSection";
import { jobSchema } from "../../../validations/jobSchema";
import ExperienceSalarySection from "./ExperienceSalarySection";
import DynamicListSection from "./DynamicListSection";
import DescriptionSection from "./DescriptionSection";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { analyzeJobThunk, createJobThunk, updateJobThunk } from "../../../features/jobs/jobsThunk";
import AIJobAssistant from "./AIJobAssistant";

const JobForm = ({
    mode = "create",
    initialValues,
}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(jobSchema),
        defaultValues: {
            title: "",
            location: "",
            employmentType: "FULL_TIME",
            experienceMin: 0,
            experienceMax: 0,
            salaryMin: 0,
            salaryMax: 0,
            description: "",
            requiredSkills: [],
            preferredSkills: [],
            requirements: [],
            responsibilities: [],
        },
    });

    useEffect(() => {

        if (mode === "edit" && initialValues) {

            reset(initialValues);

        }

    }, [mode, initialValues, reset]);

    const onSubmit = async (data) => {

        try {

            if (mode === "create") {

                await dispatch(
                    createJobThunk(data)
                ).unwrap();

                toast.success("Job created successfully");

            } else {

                await dispatch(
                    updateJobThunk({
                        id: initialValues._id,
                        data,
                    })
                ).unwrap();

                toast.success("Job updated successfully");

            }

            navigate("/recruiter/jobs");

        } catch (error) {

            toast.error(error);

        }

    };

    const { isAnalyzing } = useSelector(
        (state) => state.jobs
    );

    const handleGenerateAI = async (prompt) => {

        try {

            const response = await dispatch(
                analyzeJobThunk(prompt)
            ).unwrap();

            console.log(response);
            reset(response.job);

            // reset({

            //     ...getValues(),

            //     ...response.job,

            // });

            toast.success(
                "AI generated job successfully."
            );

        } catch (error) {

            toast.error(error);

        }

    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >

            <Grid container spacing={4}>

                <Grid size={{ xs: 12 }}>
                    <AIJobAssistant
                        loading={isAnalyzing}
                        onGenerate={handleGenerateAI}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <BasicInformationSection
                        register={register}
                        errors={errors}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <ExperienceSalarySection
                        register={register}
                        errors={errors}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Controller
                        control={control}
                        name="requiredSkills"
                        render={({ field }) => (
                            <SkillsInput
                                title="Required Skills"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <Controller
                        control={control}
                        name="preferredSkills"
                        render={({ field }) => (
                            <SkillsInput
                                title="Preferred Skills"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <DynamicListSection
                        title="Requirements"
                        name="requirements"
                        control={control}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <DynamicListSection
                        title="Responsibilities"
                        name="responsibilities"
                        control={control}
                    />
                </Grid>

                <Grid size={{ xs: 12 }}>
                    <DescriptionSection
                        control={control}
                    />
                </Grid>

            </Grid>

            <Box
                sx={{
                    mt: 4,
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                >
                    {mode === "create" ? "Create Job" : "Update Job"}
                </Button>
            </Box>

        </Box>
    );
};

export default JobForm;