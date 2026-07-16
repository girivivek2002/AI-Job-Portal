export const calculateATSScore =
    (
        candidate,
        job
    ) => {

        const candidateSkills =
            candidate.skills || [];

        const jobSkills =
            job.requiredSkills || [];

        let totalScore = 0;

        // Skills = 70%
        let skillsScore = 0;

        if (jobSkills.length) {

            const matchedSkills =
                candidateSkills.filter(
                    skill =>
                        jobSkills.includes(
                            skill
                        )
                );

            skillsScore =
                (
                    matchedSkills.length /
                    jobSkills.length
                ) * 100;
        }

        // Experience = 30%
        let experienceScore = 0;

        if (
            job.experienceMin > 0
        ) {

            experienceScore =
                Math.min(
                    (
                        candidate.totalExperience /
                        job.experienceMin
                    ) * 100,
                    100
                );
        }

        totalScore =
            skillsScore * 0.7 +
            experienceScore * 0.3


        return Math.round(
            totalScore
        );
    };