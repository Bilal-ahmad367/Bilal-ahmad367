
const state = {
    hotel: {},
};

const getters = {
    hotel: (state) => state.hotel,
};

const actions = {
    async getHotelById({ commit }, hotelId) {
        // Fetch hotel data by ID and commit it to the state
        try {
            const BaseUrl = import.meta.env.VITE_API_URL;
            const token = localStorage.getItem("token");
            const response = await fetch(`${BaseUrl}/hotels/getHotel/${hotelId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const data = await response.json();
            

               // Convert the logo ArrayBuffer to Blob URL (if logo exists)
               if (data.logo && data.logo.data && data.logo.data.data.length > 0) {
                data.logoUrl = arrayBufferToBlobUrl(data.logo.data.data, data.logo.contentType);
            }


            commit('setHotel', data);
        } catch (error) {
            console.error("Error fetching hotel:", error);
        }
    },
};



// Helper function to convert ArrayBuffer to Blob URL
function arrayBufferToBlobUrl(buffer, contentType) {
    try {
        const byteArray = new Uint8Array(buffer);
        const blob = new Blob([byteArray], { type: contentType });
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("Error converting buffer to Blob URL:", error);
        return null;
    }
}

const mutations = {
    setHotel(state, hotel) {
        state.hotel = hotel;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
