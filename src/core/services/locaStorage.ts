import { AuthData } from '@/core/utils/types';
import { useAppStore } from '@/core/store';

const store = useAppStore();

export const setLocalStorage = (data: AuthData) => {
    localStorage.setItem('token', data.token);
    store.setIsAuthenticated(true);
};

export const removeLocalStorage = () => {
    localStorage.removeItem('token');
    store.setIsAuthenticated(false);
};

export const getLocalStorage = () => {
    return {
        token: localStorage.getItem('token'),
    };
};
