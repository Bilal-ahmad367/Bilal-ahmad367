import { useApiService } from '@/core/composables/useApi';

const { request } = useApiService();

export const register = async (userData: any) => {
  return await request('/auth/register', 'POST', userData);
};


export const Login = async (userData: any) => {
  const token = localStorage.getItem("token"); // Or fetch from your state management

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data", // Important for file uploads if sending FormData
  };

    let response: any = await request('/auth/login', 'POST', userData);
    localStorage.setItem('token', response.token);
    return response;
  };

