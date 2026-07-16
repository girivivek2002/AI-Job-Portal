import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";

const DeleteJobDialog = ({
    open,
    onClose,
    onConfirm,
    loading,
    jobTitle,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle>
                Delete Job
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete{" "}
                    <strong>{jobTitle}</strong>?

                    <br />
                    <br />

                    This action cannot be undone.
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button
                    onClick={onClose}
                >
                    Cancel
                </Button>

                <LoadingButton
                    color="error"
                    variant="contained"
                    onClick={onConfirm}
                    loading={loading}
                >
                    Delete
                </LoadingButton>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteJobDialog;