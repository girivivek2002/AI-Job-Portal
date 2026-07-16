import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const recruiterNavigation = [
    {
        title: "Dashboard",
        icon: <DashboardRoundedIcon />,
        path: "/recruiter/dashboard",
    },
    {
        title: "Jobs",
        icon: <WorkRoundedIcon />,
        path: "/recruiter/jobs",
    },
    {
        title: "Candidates",
        icon: <GroupRoundedIcon />,
        path: "/recruiter/candidates",
    },
    {
        title: "Applications",
        icon: <DescriptionRoundedIcon />,
        path: "/recruiter/applications",
    },
    {
        title: "Analytics",
        icon: <BarChartRoundedIcon />,
        path: "/recruiter/analytics",
    },
    {
        title: "Settings",
        icon: <SettingsRoundedIcon />,
        path: "/recruiter/settings",
    },
];

export default recruiterNavigation;