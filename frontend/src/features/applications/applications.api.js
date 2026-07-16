import api from "../../api/axios";

export const applyJob = (jobId) => {
    return api.post(`/applications/apply/${jobId}`);
};

export const getMyApplications = () => {
    return api.get("/applications/my");
};

export const getJobApplication = (jobId) => {
    return api.get(`/applications/my/${jobId}`);
};


