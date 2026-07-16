import { useState } from "react";

import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
} from "@mui/material";

import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SidebarItem from "./SidebarItem";
import recruiterNavigation from "../../constants/recruiterNavigation";


import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { useDispatch } from "react-redux";




const Sidebar = ({
    mobileOpen,
    onClose,
}) => {

    const [collapsed, setCollapsed] = useState(false);
    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down("md")
    );

    const dispatch = useDispatch();



    const sidebarContent = (
        <Box
            sx={{
                width: collapsed ? 80 : 260,
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    height: 70,
                    px: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: collapsed
                        ? "center"
                        : "space-between",
                }}
            >
                {!collapsed && (
                    <Typography
                        variant="h5"
                        fontWeight={700}
                    >
                        SmartHire AI
                    </Typography>
                )}

                {!isMobile && (
                    <IconButton
                        onClick={() =>
                            setCollapsed(!collapsed)
                        }
                    >
                        {collapsed ? (
                            <MenuRoundedIcon />
                        ) : (
                            <MenuOpenRoundedIcon />
                        )}
                    </IconButton>
                )}
            </Box>

            <Divider />

            <List
                sx={{
                    p: 2,
                    flexGrow: 1,
                }}
            >
                {recruiterNavigation.map(item => (
                    <SidebarItem
                        key={item.title}
                        item={item}
                        collapsed={
                            collapsed && !isMobile
                        }
                        onClick={
                            isMobile
                                ? onClose
                                : undefined
                        }
                    />
                ))}
            </List>

            <Divider />

            <Box sx={{ p: 2 }}>
                <Button
                    fullWidth
                    color="error"
                    variant="outlined"
                    startIcon={<LogoutRoundedIcon />}
                    onClick={() => {

                        onClose?.();

                        dispatch(logoutUser());

                    }}
                >
                    Logout
                </Button>
            </Box>
        </Box>
    );

    if (isMobile) {

        return (
            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {sidebarContent}
            </Drawer>
        );

    }

    return (
        <Box
            sx={{
                borderRight: 1,
                borderColor: "divider",
            }}
        >
            {sidebarContent}
        </Box>
    );
};

export default Sidebar;