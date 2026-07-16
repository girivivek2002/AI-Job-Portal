import { Badge, IconButton } from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

const NotificationButton = () => {
    return (
        <IconButton>
            <Badge
                badgeContent={3}
                color="error"
            >
                <NotificationsNoneRoundedIcon />
            </Badge>
        </IconButton>
    );
};

export default NotificationButton;