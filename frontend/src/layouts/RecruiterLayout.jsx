import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/recruiter/layout/Sidebar";
import Topbar from "../components/recruiter/layout/Topbar";
import { useState } from "react";





const RecruiterLayout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(prev => !prev);
    };

    const handleDrawerClose = () => {
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
            <Sidebar
                mobileOpen={mobileOpen}
                onClose={handleDrawerClose}
            />

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Topbar
                    onMenuClick={handleDrawerToggle}
                />

                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        p: 3,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default RecruiterLayout;