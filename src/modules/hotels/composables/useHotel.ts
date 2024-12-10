import { useApi } from '@/core/composables/useApi';
import { setLocalStorage } from '@/core/services/localStorage';
const { request } = useApi();

export const AddHotel = async (formData) => {
        const response = await request("/hotels/addhotel", "POST", formData);
       setLocalStorage(response); 
        return response;
  
};


export const getAllHotels = async () => {
    try {
        const response = await request("/hotels/user-hotels", "GET");
        // Ensure the backend response is in the correct format
        console.log("Hotels fetched successfully:", response);
        return response;
    } catch (err) {
        console.error("Error fetching hotels:", err);
        throw err; // re-throw error if necessary
    }
};
