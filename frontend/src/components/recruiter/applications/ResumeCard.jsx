import {
    Button,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

const ResumeCard = ({
    selectedApplication,
}) => {


    console.log(selectedApplication.candidateId.resumeUrl)
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
                mb: 3,
            }}
        >
            <Typography
                variant="h6"
                mb={2}
            >
                Resume
            </Typography>

            <Typography
                variant="body2"
                color="text.secondary"
                mb={3}
            >
                {selectedApplication?.candidateId?.bio?.name}
            </Typography>

            <Stack spacing={2}>
                <Button
                    variant="contained"
                    startIcon={<VisibilityRoundedIcon />}
                    href={selectedApplication.candidateId.resumeUrl}
                    target="_blank"
                >
                    View Resume
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<DownloadRoundedIcon />}
                    href={selectedApplication.candidateId.resumeUrl}
                    target="_blank"
                >
                    Download Resume
                </Button>
            </Stack>
        </Paper>
    );
};

export default ResumeCard;