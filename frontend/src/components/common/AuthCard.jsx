import { Card, CardContent } from "@mui/material";

const AuthCard = ({ children }) => {
    return (
        <Card
            elevation={4}
            sx={{
                width: "100%",
                maxWidth: 450,
                mx: "auto",
                borderRadius: 3,
            }}
        >
            <CardContent
                sx={{
                    p: 4,
                }}
            >
                {children}
            </CardContent>
        </Card>
    );
};

export default AuthCard;
