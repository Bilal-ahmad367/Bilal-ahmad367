import { useApiService } from '@/core/composables/useApi';
const { request } = useApiService();

export const AddHotel = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    console.log("Sending user data:", formData); // Debugging user data

    const response = await request("/hotels/addhotel", "POST", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await request("/hotels/user-hotels", "GET", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Ensure the backend response is in the correct format
    console.log("Hotels fetched successfully:", response);
    return response;
  } catch (err) {
    console.error("Error fetching hotels:", err);
    throw err; // re-throw error if necessary
  }
};

