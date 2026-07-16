const calculateProfileCompletion = (
    profile,
    resume
) => {

    if (!profile) {
        return {
            percentage: 0,
            completed: 0,
            total: 8,
            missingItems: [
                "Resume",
                "Name",
                "Phone",
                "Professional Title",
                "Summary",
                "Skills",
                "Education",
                "Projects",
            ],
        };
    }

    let completed = 0;

    const total = 8;

    const missingItems = [];

    // Resume
    if (resume) {
        completed++;
    } else {
        missingItems.push("Resume");
    }

    // Name
    if (profile.bio?.name?.trim()) {
        completed++;
    } else {
        missingItems.push("Name");
    }

    // Phone
    if (profile.bio?.phone?.trim()) {
        completed++;
    } else {
        missingItems.push("Phone");
    }

    // Professional Title
    if (profile.bio?.title?.trim()) {
        completed++;
    } else {
        missingItems.push("Professional Title");
    }

    // Summary
    if (profile.bio?.description?.trim()) {
        completed++;
    } else {
        missingItems.push("Professional Summary");
    }

    // Skills
    if (profile.skills?.length > 0) {
        completed++;
    } else {
        missingItems.push("Skills");
    }

    // Education
    if (profile.education?.length > 0) {
        completed++;
    } else {
        missingItems.push("Education");
    }

    // Projects
    if (profile.projects?.length > 0) {
        completed++;
    } else {
        missingItems.push("Projects");
    }

    const percentage = Math.round(
        (completed / total) * 100
    );

    return {
        percentage,
        completed,
        total,
        missingItems,
    };

};

export default calculateProfileCompletion;