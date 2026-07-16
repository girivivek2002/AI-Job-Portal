import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",

        primary: {
            main: "#2563EB",
            light: "#60A5FA",
            dark: "#1D4ED8",
            contrastText: "#FFFFFF",
        },

        secondary: {
            main: "#14B8A6",
            light: "#5EEAD4",
            dark: "#0F766E",
            contrastText: "#FFFFFF",
        },

        success: {
            main: "#22C55E",
        },

        warning: {
            main: "#F59E0B",
        },

        error: {
            main: "#EF4444",
        },

        info: {
            main: "#3B82F6",
        },

        background: {
            default: "#F8FAFC",
            paper: "#FFFFFF",
        },

        text: {
            primary: "#0F172A",
            secondary: "#64748B",
        },

        divider: "#E2E8F0",
    },

    shape: {
        borderRadius: 12,
    },

    typography: {
        fontFamily: [
            "Inter",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
        ].join(","),

        h1: {
            fontSize: "3rem",
            fontWeight: 700,
        },

        h2: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },

        h3: {
            fontSize: "2rem",
            fontWeight: 700,
        },

        h4: {
            fontSize: "1.75rem",
            fontWeight: 700,
        },

        h5: {
            fontSize: "1.5rem",
            fontWeight: 600,
        },

        h6: {
            fontSize: "1.25rem",
            fontWeight: 600,
        },

        subtitle1: {
            fontSize: "1rem",
            fontWeight: 500,
        },

        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 500,
        },

        body1: {
            fontSize: "1rem",
        },

        body2: {
            fontSize: "0.875rem",
        },

        caption: {
            fontSize: "0.75rem",
            color: "#64748B",
        },

        button: {
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    minHeight: 48,
                    fontWeight: 600,
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                variant: "outlined",
                fullWidth: true,
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },

        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                },
            },
        },

        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: 16,
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "none",
                    borderBottom: "1px solid #E2E8F0",
                },
            },
        },
    },
});

export default theme;