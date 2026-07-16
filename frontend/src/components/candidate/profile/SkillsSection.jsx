import {
    Box,
    Chip,
    Typography,
} from "@mui/material";

import { useSelector } from "react-redux";

import ProfileSection from "./ProfileSection";

const SkillsSection = () => {

    const { profile } = useSelector(
        state => state.profile
    );

    return (

        <ProfileSection title="Skills">

            {profile?.skills?.length ? (

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        width: "100%",
                    }}
                >

                    {profile.skills.map((skill) => (

                        <Chip
                            key={skill}
                            label={skill}
                            color="primary"
                            variant="outlined"
                            sx={{
                                maxWidth: "100%",
                                "& .MuiChip-label": {
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                },
                            }}
                        />

                    ))}

                </Box>

            ) : (

                <Typography color="text.secondary">
                    No skills available.
                </Typography>

            )}

        </ProfileSection>

    );

};

export default SkillsSection;