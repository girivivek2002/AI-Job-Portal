export const extractExperience =
    (text) => {

        const regex =
            /(\d+)\+?\s*(years?|yrs?)/i;

        const match =
            text.match(regex);

        if (!match) {
            return 0;
        }

        return Number(
            match[1]
        );
    };