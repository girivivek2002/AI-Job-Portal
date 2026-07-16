import { InputAdornment, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchBar = () => {
    return (
        <TextField
            placeholder="Search..."
            size="small"
            sx={{
                width: {
                    xs: "100%",
                    sm: 280,
                },
            }}
            input={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchRoundedIcon color="action" />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchBar;