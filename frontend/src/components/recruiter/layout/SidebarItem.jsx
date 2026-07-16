import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";

const SidebarItem = ({
    item,
    collapsed,
    onClick,
}) => {

    const handleClick = () => {
        onClick?.(); // Close drawer on mobile
    };

    return (
        <ListItemButton
            component={NavLink}
            to={item.path}
            onClick={handleClick}
            sx={{
                borderRadius: 2,
                mb: 1,
                minHeight: 48,

                "&.active": {
                    bgcolor: "primary.main",
                    color: "primary.contrastText",

                    "& .MuiListItemIcon-root": {
                        color: "primary.contrastText",
                    },
                },

                "&:hover": {
                    bgcolor: "primary.light",
                    color: "primary.contrastText",

                    "& .MuiListItemIcon-root": {
                        color: "primary.contrastText",
                    },
                },
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: collapsed ? 0 : 40,
                    justifyContent: "center",
                }}
            >
                {item.icon}
            </ListItemIcon>

            {!collapsed && (
                <ListItemText primary={item.title} />
            )}
        </ListItemButton>
    );
};

export default SidebarItem;