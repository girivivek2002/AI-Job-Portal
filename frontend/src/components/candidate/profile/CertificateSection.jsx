import {
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import ProfileSection from "./ProfileSection";

const CertificateSection = () => {

    const { profile } = useSelector(
        state => state.profile
    );

    const certifications = profile?.certifications || [];

    console.log("certificate", profile)


    return (

        <ProfileSection title="Certifications">

            {certifications.length ? (

                <Stack spacing={2}>

                    {certifications.map((certificate, index) => (

                        <Paper
                            key={index}
                            variant="outlined"
                            sx={{
                                p: 2,
                                borderRadius: 2,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                    lineHeight: 1.6,
                                }}
                            >
                                {certificate}
                            </Typography>
                        </Paper>

                    ))}

                </Stack>

            ) : (

                <Typography color="text.secondary">
                    No certifications available.
                </Typography>

            )}

        </ProfileSection>

    );

};

export default CertificateSection;