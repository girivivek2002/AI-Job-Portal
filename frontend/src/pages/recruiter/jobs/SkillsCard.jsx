import {
    Chip,
    Paper,
    Stack,
    Typography,
} from "@mui/material";

const SkillsCard = ({
    title,
    skills = [],
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

            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                    flexWrap: "wrap",
                }}
            >
                {skills.length > 0 ? (
                    skills.map((skill) => (
                        <Chip
                            key={skill}
                            label={skill}
                            color="primary"
                            variant="outlined"
                        />
                    ))
                ) : (
                    <Typography
                        color="text.secondary"
                    >
                        No skills added.
                    </Typography>
                )}
            </Stack>
        </Paper>
    );
};

export default SkillsCard;