import {
    Avatar,
    Box,
    Chip,
    Divider,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { useSelector } from "react-redux";

const PersonalInfoCard = () => {

    const { profile } = useSelector(state => state.profile);

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
            <Stack
                direction="row"
                spacing={3}
                alignItems="center"
            >
                <Avatar
                    sx={{
                        width: 90,
                        height: 90,
                        fontSize: 32,
                    }}
                >
                    {profile?.bio?.name?.charAt(0)?.toUpperCase()}
                </Avatar>

                <Box>
                    <Typography
                        variant="h5"
                        fontWeight={700}
                    >
                        {profile?.bio?.name || "Candidate"}
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{ mt: 1 }}
                    >
                        {profile?.bio?.title || "No headline added"}
                    </Typography>

                    {profile?.currentPosition && (
                        <Chip
                            sx={{ mt: 2 }}
                            color="primary"
                            label={profile.currentPosition}
                        />
                    )}
                </Box>
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Stack spacing={2}>

                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <EmailOutlinedIcon color="action" />

                    <Typography>
                        {profile?.bio?.email || "-"}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <PhoneOutlinedIcon color="action" />

                    <Typography>
                        {profile?.bio?.phone || "-"}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <LocationOnOutlinedIcon color="action" />

                    <Typography>
                        {profile?.bio?.location || "-"}
                    </Typography>
                </Stack>

                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                >
                    <PersonOutlineRoundedIcon color="action" />

                    <Typography>
                        {profile?.totalExperience || 0} Years Experience
                    </Typography>
                </Stack>

            </Stack>

        </Paper>
    );
};

export default PersonalInfoCard;