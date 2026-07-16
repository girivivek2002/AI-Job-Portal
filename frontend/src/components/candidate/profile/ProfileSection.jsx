import {
    Paper,
    Typography,
} from "@mui/material";

const ProfileSection = ({
    title,
    children,
}) => {

    return (

        <Paper
            elevation={0}
            sx={{
                p: 3,
                mb: 3,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
            }}
        >

            <Typography
                variant="h6"
                fontWeight={600}
                mb={2}
            >
                {title}
            </Typography>

            {children}

        </Paper>

    );

};

export default ProfileSection;