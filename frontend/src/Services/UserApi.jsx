import { axiosInstance } from "../Axios/Axiosinstance";

// login
export const userLogin = (data) => {
  return axiosInstance.post("/user/login", data);
};

// registration
export const userRegister = (data) => {
  return axiosInstance.post("/user/register", data);
};

// GOOGLE LOGIN
export const googleLogin = (code) => {
  return axiosInstance.post("/user/google", { code });
};

// Get user
export const getUserProfile = () => {
  return axiosInstance.get("/user/getuser");
};
