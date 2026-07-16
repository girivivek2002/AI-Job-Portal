import { useState } from "react";

import {
    Box,
    useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import CandidateSidebar from "../components/candidate/CandidateSidebar";
import CandidateNavbar from "../components/candidate/CandidateNavbar";



const CandidateLayout = () => {

    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down("md")
    );

    // Desktop Sidebar
    const [open, setOpen] = useState(true);

    // Mobile Drawer
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };

    const openMobileDrawer = () => {
        setMobileOpen(true);
    };

    const closeMobileDrawer = () => {
        setMobileOpen(false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                bgcolor: "background.default",
            }}
        >

            {/* Sidebar */}

            <CandidateSidebar
                open={open}
                mobileOpen={mobileOpen}
                onMobileClose={closeMobileDrawer}
            />

            {/* Right Side */}

            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >

                <CandidateNavbar
                    open={open}
                    toggleDrawer={toggleDrawer}
                    openMobileDrawer={openMobileDrawer}
                />

                {/* Page Content */}

                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: {
                            xs: 2,
                            md: 4,
                        },

                        overflowY: "auto",

                        mt: {
                            xs: "64px",
                            md: "72px",
                        },

                        transition: ".3s",
                    }}
                >
                    <Outlet />
                </Box>

            </Box>

        </Box>
    );
};

export default CandidateLayout;