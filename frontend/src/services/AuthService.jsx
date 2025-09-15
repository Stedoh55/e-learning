import axiosInstance from "../api/axios";

export const LearnerSignup = async (userData) => {
    try {
        const endpoint = "/accounts/learners/signup"
        const response = await axiosInstance.post(endpoint, userData);
        return response.data;
    } catch (error) {
        if (error.response) {
            //    Server Responded with error
            throw error.response.data;   
        } else {
            throw { error: "Network error please try again later"}
       }
    }
};