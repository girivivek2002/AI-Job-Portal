import {
    Box,
    Chip,
    Divider,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import ProfileSection from "./ProfileSection";

const ProjectsSection = () => {

    const { profile } = useSelector(
        state => state.profile
    );

    return (

        <ProfileSection title="Projects">

            {profile?.projects?.length ? (

                profile.projects.map((project, index) => (

                    <Box key={project._id || index}>

                        <Typography
                            variant="h6"
                            fontWeight={600}
                            gutterBottom
                        >
                            {project.title}
                        </Typography>

                        <Typography
                            color="text.secondary"
                            sx={{
                                mb: 2,
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {project.description}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                            }}
                        >
                            {project.technologies?.map((tech) => (

                                <Chip
                                    key={tech}
                                    label={tech}
                                    size="small"
                                    color="primary"
                                    variant="outlined"
                                    sx={{
                                        maxWidth: "100%",
                                        "& .MuiChip-label": {
                                            whiteSpace: "normal",
                                            wordBreak: "break-word",
                                            textAlign: "center",
                                            paddingY: 0.5,
                                        },
                                    }}
                                />

                            ))}
                        </Box>

                        {index !== profile.projects.length - 1 && (

                            <Divider sx={{ my: 3 }} />

                        )}

                    </Box>

                ))

            ) : (

                <Typography color="text.secondary">
                    No projects available.
                </Typography>

            )}

        </ProfileSection>

    );

};

export default ProjectsSection;