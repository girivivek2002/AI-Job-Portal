export const extractProjects =
    (text) => {

        const projects = [];

        const lines =
            text.split("\n");

        let inProjectSection =
            false;

        for (
            const line of lines
        ) {

            const trimmed =
                line.trim();

            if (
                trimmed
                    .toLowerCase()
                    .includes(
                        "project" || "projects"
                    )
            ) {

                inProjectSection =
                    true;

                continue;
            }

            if (
                inProjectSection &&
                trimmed
            ) {

                projects.push({
                    title:
                        trimmed
                });

                if (
                    projects.length >= 5
                ) {
                    break;
                }
            }
        }

        return projects;
    };