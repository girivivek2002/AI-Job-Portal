import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { applyJobThunk } from "../../../features/applications/applicationsThunk";


const ApplyJobDialog = ({
    open,
    onClose,
    jobId,
    onSuccess,
}) => {

    const dispatch = useDispatch();

    const { isApplying } = useSelector(
        state => state.applications
    );

    const handleApply = async () => {

        try {

            await dispatch(
                applyJobThunk(jobId)
            ).unwrap();

            toast.success(
                "Application submitted successfully."
            );



            onClose();

            if (onSuccess) {
                onSuccess();
            }



        } catch (error) {

            toast.error(error);

        }

    };

    return (

        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
        >

            <DialogTitle>
                Apply for Job
            </DialogTitle>

            <DialogContent>

                <DialogContentText>

                    Your latest uploaded resume will be analyzed to calculate your ATS score and AI matching score.

                    <br />
                    <br />

                    Are you sure you want to continue?

                </DialogContentText>

            </DialogContent>

            <DialogActions>

                <Button onClick={onClose}>
                    Cancel
                </Button>

                <LoadingButton
                    loading={isApplying}
                    variant="contained"
                    onClick={handleApply}
                >
                    Apply
                </LoadingButton>

            </DialogActions>

        </Dialog>

    );

};

export default ApplyJobDialog;