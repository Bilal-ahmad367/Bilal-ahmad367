import { AxiosRequestConfig } from 'axios';
import apiClient from '@/core/utils/apiClient';
import { ref } from 'vue';

export function useApiService() {
    const loading = ref(false);
    const error = ref<string | null>(null);
    const baseUrl = import.meta.env.VITE_API_URL;

    const request = async <T>(
        url: string,
        method: 'GET' | 'POST' = 'GET',
        data: any = null,
        config: AxiosRequestConfig = {}
    ) => {
        loading.value = true;
        error.value = null;
    
        const headers = {
            ...config.headers,
        };
        
        try {
            const response = await apiClient({
                url: `${baseUrl}${url}`,
                method,
                data,
                headers,
                ...config,
            });
    
            if (response.status !== 200) {
                throw new Error(`Unexpected status code: ${response.status}`);
            }
    
            return response.data as T;
        } catch (err: any) {
            // Specific error handling for different HTTP statuses
            if (err.response) {
                error.value = err.response?.data?.message || 'Request failed';
            } else {
                error.value = 'Network error or server is down';
            }
    
            console.error("Error:", err);
            throw err; // re-throw error if necessary
        } finally {
            loading.value = false;
        }
    };
    
    

    return { request, loading, error };
}
