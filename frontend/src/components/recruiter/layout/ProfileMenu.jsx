import {
    Avatar,
    Box,
    Typography,
} from "@mui/material";

import { useSelector } from "react-redux";

const ProfileMenu = () => {

    const { user } = useSelector(
        state => state.auth
    );

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
            }}
        >
            <Avatar>
                {user?.name?.charAt(0).toUpperCase()}
            </Avatar>

            <Box
                sx={{
                    display: {
                        xs: "none",
                        md: "block",
                    },
                }}
            >
                <Typography fontWeight={600}>
                    {user?.name}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    Recruiter
                </Typography>
            </Box>
        </Box>
    );
};

export default ProfileMenu;