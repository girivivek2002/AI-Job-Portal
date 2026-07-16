import api from "../../api/axios";



// this is for get all job application of each job for rercuiter
export const getJobApplicationAll = (jobId) => {
    return api.get(`/applications/jobs/${jobId}`);
};


export const updateApplicationStatus = (
    applicationId,
    status
) => {
    return api.patch(
        `/applications/${applicationId}/status`,
        { status }
    );
};



export const getApplicationDetails = (applicationId) => {
    return api.get(`/applications/${applicationId}`);
};