import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const ListCard = ({
    title,
    items = [],
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
            <Typography
                variant="h6"
                fontWeight={600}
                mb={2}
            >
                {title}
            </Typography>

            <List disablePadding>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <ListItem
                            key={index}
                            disablePadding
                            sx={{ mb: 1 }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 36,
                                }}
                            >
                                <CheckCircleRoundedIcon
                                    color="primary"
                                    fontSize="small"
                                />
                            </ListItemIcon>

                            <ListItemText
                                primary={item}
                            />
                        </ListItem>
                    ))
                ) : (
                    <Typography
                        color="text.secondary"
                    >
                        No data available.
                    </Typography>
                )}
            </List>
        </Paper>
    );
};

export default ListCard;