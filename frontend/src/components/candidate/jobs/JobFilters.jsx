import {
    Box,
    MenuItem,
    Paper,
    TextField,
} from "@mui/material";

const JobFilters = ({
    search,
    setSearch,
    employmentType,
    setEmploymentType,
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
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                }}
            >
                <TextField
                    label="Search Jobs"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    sx={{
                        minWidth: 300,
                    }}
                />

                <TextField
                    select
                    label="Employment Type"
                    value={employmentType}
                    onChange={(e) =>
                        setEmploymentType(
                            e.target.value
                        )
                    }
                    sx={{
                        width: 220,
                    }}
                >
                    <MenuItem value="">
                        All
                    </MenuItem>

                    <MenuItem value="FULL_TIME">
                        Full Time
                    </MenuItem>

                    <MenuItem value="PART_TIME">
                        Part Time
                    </MenuItem>

                    <MenuItem value="CONTRACT">
                        Contract
                    </MenuItem>

                    <MenuItem value="INTERNSHIP">
                        Internship
                    </MenuItem>
                </TextField>
            </Box>
        </Paper>
    );
};

export default JobFilters;