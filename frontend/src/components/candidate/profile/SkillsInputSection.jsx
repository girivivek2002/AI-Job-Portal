import { Controller } from "react-hook-form";
import SkillsInput from "../../../pages/recruiter/jobs/SkillsInput";



const SkillsInputSection = ({
    control,
}) => {

    return (

        <Controller
            control={control}
            name="skills"
            render={({ field }) => (

                <SkillsInput
                    title="Skills"
                    value={field.value}
                    onChange={field.onChange}
                />

            )}
        />

    );

};

export default SkillsInputSection;