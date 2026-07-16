import api from "../../api/axios";


export const uploadResume = (formData) => {
    return api.post("/resume/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const getCandidateProfile = () => {
    return api.get("/candidates/me");
};

export const getResume = () => {
    return api.get("/resume/me");
};

export const updateProfile = (data) => {
    return api.put("/candidates/me", data);
}