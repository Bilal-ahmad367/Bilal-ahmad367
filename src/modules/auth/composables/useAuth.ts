import { useApiService } from '@/core/composables/useApi';

import { setLocalStorage } from '@/core/services/locaStorage';
const { request } = useApiService();


export const register = async (userData: any) => {
  return await request('/auth/register', 'POST', userData);
};


export const Login = async (userData: any) => {
  
  let response: any = await request('/auth/login', 'POST', userData);
  setLocalStorage(response);
  return response; // Return the response, in case needed elsewhere
};

