import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const navItems = [
        {
            label: "Jobs",
            path: "/jobs",
        },

    ];

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(18px)",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    color: "text.primary",
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: 1300,
                        mx: "auto",
                        width: "100%",
                        py: 2,


                    }}
                >
                    {/* Logo */}

                    <Typography
                        variant="h5"
                        fontWeight={800}
                        color="primary.main"

                        sx={{
                            cursor: "pointer",
                            flexGrow: 1,
                            background:
                                "linear-gradient(90deg,#2563EB,#06B6D4)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            letterSpacing: 0.5,
                        }}
                        onClick={() => navigate("/")}
                    >
                        SmartHire AI
                    </Typography>

                    {/* Desktop Menu */}

                    <Stack
                        direction="row"
                        spacing={1}
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                            mr: 3,
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                onClick={() =>
                                    navigate(item.path)
                                }
                                sx={{
                                    color: "text.primary",
                                    fontWeight: 600,
                                    px: 2,
                                    borderRadius: 2,
                                    transition: ".3s",

                                    "&:hover": {
                                        bgcolor: "primary.light",
                                        color: "primary.main",
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Stack>

                    {/* Desktop Buttons */}

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => navigate("/login")}
                            sx={{
                                borderRadius: 3,
                                px: 3,
                                textTransform: "none",
                                fontWeight: 600,
                            }}
                        >
                            Login
                        </Button>

                        <Button
                            variant="contained"
                            onClick={() => navigate("/register")}
                            sx={{
                                borderRadius: 3,
                                px: 3,
                                textTransform: "none",
                                fontWeight: 600,
                                boxShadow:
                                    "0 8px 24px rgba(37,99,235,.3)",

                                "&:hover": {
                                    boxShadow:
                                        "0 10px 28px rgba(37,99,235,.45)",
                                },
                            }}
                        >
                            Get Started
                        </Button>
                    </Stack>

                    {/* Mobile Menu */}

                    <Box
                        sx={{
                            display: {
                                xs: "block",
                                md: "none",
                            },
                        }}
                    >
                        <IconButton
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}

            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box
                    sx={{
                        width: 260,
                        py: 3,
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight={700}
                        textAlign="center"
                        mb={2}
                    >
                        SmartHire AI
                    </Typography>

                    <List>
                        {navItems.map((item) => (
                            <ListItem
                                disablePadding
                                key={item.label}
                            >
                                <ListItemButton
                                    onClick={() => {
                                        navigate(item.path);
                                        setOpen(false);
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Stack
                        spacing={2}
                        px={2}
                        mt={2}
                    >
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={() => {
                                navigate("/login");
                                setOpen(false);
                            }}
                        >
                            Login
                        </Button>

                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => {
                                navigate("/register");
                                setOpen(false);
                            }}
                        >
                            Get Started
                        </Button>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;