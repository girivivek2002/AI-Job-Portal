import {
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authThunk";


const DRAWER_WIDTH = 270;
const COLLAPSED_WIDTH = 80;

const menuItems = [
    {
        title: "Dashboard",
        path: "/candidate/dashboard",
        icon: <DashboardRoundedIcon />,
    },
    {
        title: "Browse Jobs",
        path: "/candidate/jobs",
        icon: <WorkRoundedIcon />,
    },
    {
        title: "My Applications",
        path: "/candidate/applications",
        icon: <DescriptionRoundedIcon />,
    },
    {
        title: "Profile",
        path: "/candidate/profile",
        icon: <PersonRoundedIcon />,
    },
    {
        title: "Settings",
        path: "/candidate/settings",
        icon: <SettingsRoundedIcon />,
    },
];

const CandidateSidebar = ({
    open,
    mobileOpen,
    onMobileClose,
}) => {

    const dispatch = useDispatch();

    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down("md")
    );

    const drawerContent = (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
            }}
        >

            {/* Logo */}

            <Box
                sx={{
                    px: open ? 3 : 2,
                    py: 3,
                    display: "flex",
                    justifyContent: open ? "flex-start" : "center",
                    transition: ".3s",
                }}
            >
                {open ? (
                    <Box>

                        <Typography
                            variant="h5"
                            fontWeight={700}
                        >
                            SmartHire AI
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Candidate Portal
                        </Typography>

                    </Box>
                ) : (

                    <Typography
                        variant="h4"
                        fontWeight={700}
                    >
                        SH
                    </Typography>

                )}
            </Box>

            <Divider />

            {/* Menu */}

            <List
                sx={{
                    px: 2,
                    py: 2,
                    flexGrow: 1,
                }}
            >
                {menuItems.map((item) => (

                    <ListItemButton
                        key={item.title}
                        component={NavLink}
                        to={item.path}
                        onClick={() => {
                            if (isMobile) {
                                onMobileClose();
                            }
                        }}
                        sx={{
                            height: 52,
                            borderRadius: 3,
                            mb: 1,

                            justifyContent: open
                                ? "initial"
                                : "center",

                            px: 2,

                            "&.active": {
                                bgcolor: "primary.main",
                                color: "white",

                                "& .MuiListItemIcon-root": {
                                    color: "white",
                                },
                            },
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 2 : "auto",
                                justifyContent: "center",
                                color: "text.secondary",
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>

                        {open && (
                            <ListItemText
                                primary={item.title}
                            />
                        )}

                    </ListItemButton>

                ))}
            </List>

            <Divider />

            {/* Logout */}

            <Box sx={{ p: 2 }}>

                <ListItemButton
                    onClick={() => dispatch(logoutUser())}
                    sx={{
                        borderRadius: 3,
                        justifyContent: open
                            ? "initial"
                            : "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 2 : "auto",
                        }}
                    >
                        <LogoutRoundedIcon />
                    </ListItemIcon>

                    {open && (
                        <ListItemText
                            primary="Logout"
                        />
                    )}

                </ListItemButton>

            </Box>

        </Box>
    );

    if (isMobile) {

        return (
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onMobileClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: DRAWER_WIDTH,
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        );
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: open
                    ? DRAWER_WIDTH
                    : COLLAPSED_WIDTH,

                flexShrink: 0,

                "& .MuiDrawer-paper": {

                    width: open
                        ? DRAWER_WIDTH
                        : COLLAPSED_WIDTH,

                    transition:
                        theme.transitions.create(
                            "width",
                            {
                                duration: 300,
                            }
                        ),

                    overflow: "hidden",

                    boxSizing: "border-box",

                    borderRight: `1px solid ${theme.palette.divider}`,
                },
            }}
        >
            {drawerContent}
        </Drawer>
    );

};

export default CandidateSidebar;