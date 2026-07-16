import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

import ProfileSection from "./ProfileSection";

const SummarySection = () => {

    const { profile } = useSelector(
        state => state.profile
    );

    return (
        <ProfileSection title="Professional Summary">

            <Typography
                color="text.secondary"
                sx={{
                    whiteSpace: "pre-wrap",
                    lineHeight: 1.8,
                }}
            >
                {profile?.bio?.description ||
                    "Upload your resume to generate an AI summary."}
            </Typography>

        </ProfileSection>
    );

};

export default SummarySection;