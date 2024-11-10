import { useApiService } from '@/core/composables/useApiHeader';

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
