import {
    LinearProgress,
    Paper,
    Typography,
} from "@mui/material";
import calculateProfileCompletion from "../../../utils/calculateProfileCompletion";
import { useSelector } from "react-redux";

const ProfileCompletion = () => {


    const { profile, resume } = useSelector(state => state.profile)


    const data = calculateProfileCompletion(profile, resume)

    console.log(data);

    return (

        <Paper
            elevation={0}
            sx={{
                p: 3,
                border: 1,
                borderColor: "divider",
                borderRadius: 3,
            }}
        >

            <Typography
                variant="h6"
                mb={2}
            >
                Profile Completion
            </Typography>

            <LinearProgress
                variant="determinate"
                value={data.percentage}
                sx={{
                    height: 10,
                    borderRadius: 5,
                }}
            />

            <Typography
                mt={2}
            >
                {data.percentage}% Completed
            </Typography>

        </Paper>

    );

};

export default ProfileCompletion;