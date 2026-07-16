import { Controller } from "react-hook-form";
import SkillsInput from "../../../pages/recruiter/jobs/SkillsInput";



const CertificateFormSection = ({ control }) => {

    return (
        <Controller
            control={control}
            name="certifications"
            render={({ field }) => (
                <SkillsInput
                    title="Certifications"
                    value={field.value || []}
                    onChange={field.onChange}
                />
            )}
        />
    );
};

export default CertificateFormSection;