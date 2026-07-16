import {
    Card,
    CardActionArea,
    Stack,
    Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const roles = [
    {
        value: "candidate",
        title: "Candidate",
        description: "Apply for jobs",
        icon: <PersonIcon />,
    },
    {
        value: "recruiter",
        title: "Recruiter",
        description: "Hire top talent",
        icon: <BusinessCenterIcon />,
    },
];

const RoleSelector = ({ value, onChange }) => {
    return (
        <Stack direction="row" spacing={2}>
            {roles.map((role) => {

                const selected = value === role.value;

                return (
                    <Card
                        key={role.value}
                        sx={{
                            flex: 1,
                            border: selected
                                ? 2
                                : 1,
                            borderColor: selected
                                ? "primary.main"
                                : "divider",
                        }}
                    >
                        <CardActionArea
                            onClick={() =>
                                onChange(role.value)
                            }
                            sx={{
                                p: 2,
                                textAlign: "center",
                            }}
                        >
                            {role.icon}

                            <Typography
                                variant="h6"
                                mt={1}
                            >
                                {role.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                {role.description}
                            </Typography>
                        </CardActionArea>
                    </Card>
                );
            })}
        </Stack>
    );
};

export default RoleSelector;