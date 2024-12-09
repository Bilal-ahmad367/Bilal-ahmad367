import { useApiService } from '@/core/composables/useApi';
const { request } = useApiService();

export const AddHotel = async (formData) => {
  try {

    const response = await request("/hotels/addhotel", "POST", formData );

    console.log("Hotel added successfully:", response);
    return response;
  } catch (error) {
    console.error("Error adding hotel:", error);
    throw error; // re-throw error if necessary
  }
};


// Function to get all hotels
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

