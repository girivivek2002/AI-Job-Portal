import {
    Box,
    Button,
    InputAdornment,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const JobToolbar = ({
    search,
    onSearchChange,
    status,
    onStatusChange,
    onCreateJob,
}) => {
    return (
        <Box sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Typography
                    variant="h4"
                    fontWeight={700}
                >
                    Jobs
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<AddRoundedIcon />}
                    onClick={onCreateJob}
                >
                    Create Job
                </Button>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                }}
            >
                <TextField
                    placeholder="Search by job title..."
                    size="small"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    sx={{
                        minWidth: 320,
                    }}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRoundedIcon color="action" />
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                <TextField
                    select
                    size="small"
                    value={status}
                    onChange={(e) =>
                        onStatusChange(e.target.value)
                    }
                    sx={{
                        width: 180,
                    }}
                >
                    <MenuItem value="">
                        All Status
                    </MenuItem>

                    <MenuItem value="OPEN">
                        Open
                    </MenuItem>

                    <MenuItem value="CLOSED">
                        Closed
                    </MenuItem>
                </TextField>
            </Box>
        </Box>
    );
};

export default JobToolbar;