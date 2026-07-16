import {
    Card,
    CardContent,
    Typography,
    Box,
    Avatar,
    Chip,
} from "@mui/material";

const StatsCard = ({
    title,
    value,
    icon,
    color = "primary",
    trend,
}) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: "100%",
                border: 1,
                borderColor: "divider",
                transition: "all .25s ease",

                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                },
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                    }}
                >
                    <Box>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="h4"
                            sx={{
                                mt: 1,
                                fontWeight: 700,
                            }}
                        >
                            {value}
                        </Typography>

                        {trend && (
                            <Chip
                                label={trend}
                                color="success"
                                size="small"
                                sx={{
                                    mt: 2,
                                }}
                            />
                        )}
                    </Box>

                    <Avatar
                        sx={{
                            bgcolor: `${color}.light`,
                            color: `${color}.main`,
                            width: 56,
                            height: 56,
                        }}
                    >
                        {icon}
                    </Avatar>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StatsCard;