import axios, { AxiosInstance } from 'axios';
import { getLocalStorage, removeLocalStorage } from './localStorage';
import router from '@/router';

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, 
  headers: {
    // 'Content-Type': 'application/json',
    'Authorization': getLocalStorage().token ? `Bearer ${getLocalStorage().token}` : '',
  }
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.response.status === 401) {
    //   removeLocalStorage();
    //   router.push('/login');
    // }
    return Promise.reject(error);
  }
);

export default apiClient;
