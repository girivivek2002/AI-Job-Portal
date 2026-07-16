import {
    Avatar,
    Box,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

import formatRelativeDate from "../../../utils/formatRelativeDate";

const statusColor = {
    APPLIED: "info",
    SHORTLISTED: "success",
    INTERVIEW: "warning",
    REJECTED: "error",
    HIRED: "success",
};

const CandidateHeader = ({
    candidate,
    status,
    appliedAt,
}) => {

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
                flexWrap: "wrap",
                gap: 2,
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                alignItems="center"
            >
                <Avatar
                    sx={{
                        width: 60,
                        height: 60,
                    }}
                >
                    {candidate?.bio?.name?.[0]}
                </Avatar>

                <Box>
                    <Typography
                        variant="h5"
                        fontWeight={700}
                    >
                        {candidate?.bio?.name}
                    </Typography>

                    <Typography color="text.secondary">
                        {candidate?.bio?.title}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Applied {formatRelativeDate(appliedAt)}
                    </Typography>
                </Box>
            </Stack>

            <Chip
                label={status}
                color={statusColor[status]}
            />
        </Box>
    );
};

export default CandidateHeader;