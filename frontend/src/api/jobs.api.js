import api from "./axios";


export const getAllJobs = () => {
    return api.get("/jobs");
};

export const getRecruiterJobs = (params) => {
    return api.get("/jobs/my-jobs", {
        params,
    });
};

export const getJobById = (id) => {
    return api.get(`/jobs/${id}`);
};

export const createJob = (data) => {
    return api.post("/jobs", data);
};

export const updateJob = (id, data) => {
    return api.put(`/jobs/${id}`, data);
};

export const deleteJob = (id) => {
    return api.delete(`/jobs/${id}`);
};

export const analyzeJob = (prompt) => {
    return api.post("/jobs/analyze", {
        prompt,
    });
};