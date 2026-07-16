import {
    Divider,
    Typography,
} from "@mui/material";

import { useSelector } from "react-redux";

import ProfileSection from "./ProfileSection";

const EducationSection = () => {

    const { profile } = useSelector(
        state => state.profile
    );

    return (

        <ProfileSection title="Education">

            {profile?.education?.length ? (

                profile.education.map((edu, index) => (

                    <div key={index}>

                        <Typography fontWeight={600}>
                            {edu.degree}
                        </Typography>

                        <Typography color="text.secondary">
                            {edu.institution}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {edu.startDate} - {edu.endDate}
                        </Typography>

                        {index <
                            profile.education.length - 1 &&
                            <Divider sx={{ my: 2 }} />
                        }

                    </div>

                ))

            ) : (

                <Typography color="text.secondary">
                    No education available.
                </Typography>

            )}

        </ProfileSection>

    );

};

export default EducationSection;