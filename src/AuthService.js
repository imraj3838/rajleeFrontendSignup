import axios from 'axios';

const API_URL = 'http://localhost:8080/epankaj/v.0/users';

const forgotPassword = async (email) => {
  return axios.post(`${API_URL}/forgot-password`, { email });
};

const resetPassword = async (token, newPassword) => {
  return axios.post(`${API_URL}/reset-password`, { token, newPassword });
};

const AuthService = {
  forgotPassword,
  resetPassword,
};

export default AuthService;