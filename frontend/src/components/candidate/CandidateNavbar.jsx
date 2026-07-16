import { useState } from "react";
import { useSelector } from "react-redux";

import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Paper,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const DRAWER_WIDTH = 270;
const COLLAPSED_WIDTH = 80;

const CandidateNavbar = ({
    open,
    toggleDrawer,
    openMobileDrawer,
}) => {

    const { user } = useSelector(
        (state) => state.auth
    );

    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down("md")
    );

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            color="inherit"
            sx={{
                borderBottom: 1,
                borderColor: "divider",

                left: 0,
                right: 0,
                width: "100%",

                transition: theme.transitions.create(
                    ["margin", "width"],
                    {
                        duration: 300,
                    }
                ),

                zIndex: theme.zIndex.drawer + 1,
            }}
        >

            <Toolbar
                sx={{
                    height: 72,
                    justifyContent: "space-between",
                    gap: 3,
                }}
            >

                {/* LEFT */}

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flex: 1,
                    }}
                >

                    <IconButton
                        onClick={
                            isMobile
                                ? openMobileDrawer
                                : toggleDrawer
                        }
                    >
                        <MenuRoundedIcon />
                    </IconButton>

                    <Paper
                        elevation={0}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            px: 2,
                            height: 46,
                            flex: 1,
                            maxWidth: 450,
                            border: 1,
                            borderColor: "divider",
                            borderRadius: 3,
                        }}
                    >

                        <SearchRoundedIcon
                            color="action"
                        />

                        <InputBase
                            placeholder="Search jobs..."
                            sx={{
                                ml: 1,
                                flex: 1,
                            }}
                        />

                    </Paper>

                </Box>

                {/* RIGHT */}

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >

                    <IconButton>
                        <DarkModeRoundedIcon />
                    </IconButton>

                    <IconButton>

                        <Badge
                            badgeContent={2}
                            color="error"
                        >
                            <NotificationsRoundedIcon />
                        </Badge>

                    </IconButton>

                    <Box
                        onClick={handleOpenMenu}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            ml: 1,
                        }}
                    >

                        <Avatar
                            sx={{
                                bgcolor: "primary.main",
                            }}
                        >
                            {user?.name?.charAt(0)}
                        </Avatar>

                        {!isMobile && (

                            <>
                                <Box
                                    sx={{
                                        ml: 1.5,
                                    }}
                                >

                                    <Typography
                                        fontWeight={600}
                                    >
                                        {user?.name}
                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        Candidate
                                    </Typography>

                                </Box>

                                <KeyboardArrowDownRoundedIcon
                                    fontSize="small"
                                    sx={{
                                        ml: .5,
                                    }}
                                />

                            </>

                        )}

                    </Box>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                    >
                        <MenuItem>
                            Profile
                        </MenuItem>

                        <MenuItem>
                            Settings
                        </MenuItem>

                        <MenuItem>
                            Logout
                        </MenuItem>

                    </Menu>

                </Box>

            </Toolbar>

        </AppBar>
    );
};

export default CandidateNavbar;