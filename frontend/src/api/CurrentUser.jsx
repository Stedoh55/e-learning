import axiosInstance from "./axios";
import { useNavigate } from "react-router-dom";

//Fetching the currrent user data
export const getCurrentUser = async () => {
    
    // Attaching the JWT to the Requests
    axiosInstance.interceptors.request.use((configa) => {
        const token = localStorage.getItem("access");
        if (token) {
            configa.headers.Authorization = `Bearer ${token}`;
        }
        return configa;
    });

    // Handling the expired tokens
    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    const refresh = localStorage.getItem("refresh");
                    const { data } = await axiosInstance.post("token/refresh", { refresh });
                    localStorage.setItem("access", data.access);
                    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token.access}`;
                    originalRequest.headers["Authorization"] = `Bearer ${data.access}`;
                    return axiosInstance(originalRequest);
                } catch (error) {
                    console.error("Refresh token expired. Redirect to login.");
                    // Redirect to login
                    const navigate = useNavigate();
                    navigate("/login")
                    
                }
            }
            return Promise.reject(error);
        }
    )

    const response = await axiosInstance.get("accounts/profile");
    return response.data;
};