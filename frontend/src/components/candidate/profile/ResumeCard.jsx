import {
    Button,
    Divider,
    Link,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { uploadResumeThunk } from "../../../features/profile/profileThunk";



const ResumeCard = () => {

    const dispatch = useDispatch();

    const {
        resume,
        profile,
        isUploading,
    } = useSelector(
        state => state.profile
    );





    const handleUpload = async (e) => {

        const file = e.target.files?.[0];

        if (!file) return;

        if (file.type !== "application/pdf") {

            toast.error("Only PDF files are allowed.");

            return;

        }

        try {

            await dispatch(
                uploadResumeThunk(file)
            ).unwrap();

            toast.success(
                "Resume uploaded successfully."
            );

        } catch (error) {

            toast.error(error);

        }

    };

    return (

        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
            }}
        >

            <Typography
                variant="h6"
                fontWeight={700}
            >
                Resume
            </Typography>

            <Divider sx={{ my: 2 }} />

            {!resume ? (

                <>
                    <Typography
                        color="text.secondary"
                        mb={3}
                    >
                        Upload your latest resume.

                        AI will automatically create your profile.
                    </Typography>

                    <Button
                        loading={isUploading}
                        variant="contained"
                        component="label"
                        startIcon={
                            <UploadFileRoundedIcon />
                        }
                        fullWidth
                    >

                        Upload Resume

                        <input
                            hidden
                            type="file"
                            accept=".pdf"
                            onChange={handleUpload}
                        />

                    </Button>

                </>

            ) : (

                <Stack spacing={2}>

                    <PictureAsPdfRoundedIcon
                        color="error"
                        sx={{
                            fontSize: 55,
                        }}
                    />

                    <Typography
                        fontWeight={600}
                    >
                        {resume.originalFileName}
                    </Typography>

                    <Link
                        href={resume.resumeUrl}
                        target="_blank"
                    >
                        View Resume
                    </Link>

                    <Button
                        loading={isUploading}
                        variant="outlined"
                        component="label"
                        startIcon={
                            <AutorenewRoundedIcon />
                        }
                    >

                        Replace Resume

                        <input
                            hidden
                            type="file"
                            accept=".pdf"
                            onChange={handleUpload}
                        />

                    </Button>

                </Stack>

            )}

        </Paper>

    );

};

export default ResumeCard;