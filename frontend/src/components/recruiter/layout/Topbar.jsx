import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchBar from "./SearchBar";
import NotificationButton from "./NotificationButton";
import ThemeToggle from "./ThemeToggle";
import ProfileMenu from "./ProfileMenu";
import Sidebar from "./Sidebar";
import { useState } from "react";



const Topbar = ({
    onMenuClick,
}) => {



    return (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={0}
        >


            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    gap: 2,
                }}
            >
                <IconButton
                    sx={{
                        display: {
                            md: "none",
                        },
                    }}
                    onClick={onMenuClick}
                >
                    <MenuRoundedIcon />
                </IconButton>
                <SearchBar />

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <NotificationButton />

                    <ThemeToggle />

                    <ProfileMenu />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;