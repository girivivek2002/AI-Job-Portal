import {
    Box,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import ProfileSection from "./ProfileSection";

const ExperienceSection = () => {

    const { profile } = useSelector(
        state => state.profile
    );

    const experiences = profile?.experiences || [];

    return (
        <ProfileSection title="Experience">

            <Typography
                variant="h6"
                fontWeight={600}
                mb={2}
            >
                Total Experience:{" "}
                {profile?.totalExperience
                    ? `${profile.totalExperience} Year${profile.totalExperience > 1 ? "s" : ""}`
                    : experiences?.length > 0 ? "0-1 Year" : "Fresher"}
            </Typography>

            {experiences.length ? (

                <Stack spacing={3}>

                    {experiences.map((experience, index) => (

                        <Box key={index}>

                            <Typography
                                variant="h6"
                                fontWeight={600}
                            >
                                {experience.position || "Position Not Available"}
                            </Typography>

                            <Typography
                                color="text.secondary"
                                fontWeight={500}
                            >
                                {experience.company || "Company Not Available"}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mt: 0.5 }}
                            >
                                {experience.startDate || "N/A"}{" "}
                                -{" "}
                                {experience.endDate || "Present"}
                            </Typography>

                            {experience.description && (
                                <Typography
                                    variant="body2"
                                    sx={{ mt: 1 }}
                                >
                                    {experience.description}
                                </Typography>
                            )}

                            {index !== experiences.length - 1 && (
                                <Divider sx={{ mt: 2 }} />
                            )}

                        </Box>

                    ))}

                </Stack>

            ) : (

                <Typography color="text.secondary">
                    No experience available.
                </Typography>

            )}

        </ProfileSection>
    );
};

export default ExperienceSection;