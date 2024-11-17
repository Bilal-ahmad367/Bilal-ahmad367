import { useApiService } from '@/core/composables/useApi';

const { request } = useApiService();

export const register = async (userData: any) => {
  return await request('/auth/register', 'POST', userData);
};


export const Login = async (userData: any) => {
  
    let response: any = await request('/auth/login', 'POST', userData);
    localStorage.setItem('token', response.token);
    return response;
  };

