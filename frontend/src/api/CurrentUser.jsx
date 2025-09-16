import axiosInstance from "./axios";

// Attaching the JWT to the Requests
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

//Fetching the currrent user data
export const getCurrentUser = async () => {
    const response = await axiosInstance.get("accounts/profile");
    return response.data;
};