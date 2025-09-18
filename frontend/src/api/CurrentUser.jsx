import axiosInstance from "./axios";



//Fetching the currrent user data
export const getCurrentUser = async () => {
    


    const response = await axiosInstance.get("accounts/profile");
    return response.data;
};