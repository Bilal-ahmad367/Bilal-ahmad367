<template>
  <div class="container mx-auto mt-10">
    <div v-if="hotels.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="hotel in hotels"
        :key="hotel._id"  
        class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200 ease-in-out"
      >
        <img
          v-if="hotel.logoUrl"
          :src="hotel.logoUrl"
          alt="Hotel Logo"
          class="w-24 h-24 object-cover rounded-full mx-auto"
        />
        <h2 class="text-xl font-semibold text-center mt-4">{{ hotel.hotelname }}</h2>
        <p class="text-center text-gray-600">{{ hotel.location }}</p>

        <!-- Go to Dashboard Button -->
        <button 
          @click="goToDashboard(hotel._id)"
          class="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Go to Hotel Dashboard
        </button>
      </div>
    </div>
    <div v-else class="text-center text-gray-600">No hotels found.</div>
  </div>
</template>

<script>
import { getAllHotels } from '@/modules/main/composables/useauth';

export default {
  name: "UserHotels",
  data() {
    return {
      hotels: [],
      loader:'',
    };
  },
  mounted() {
    this.fetchHotels();
  },
  methods: {
    async fetchHotels() {
      try {
        const response = await getAllHotels();
        console.log("Full response:", response); // Inspect the response structure

        // Map response to hotel objects
        this.hotels = response.map(hotel => {
          const logoUrl = hotel.logo && hotel.logo.data.data && hotel.logo.data.data.length > 0
            ? this.arrayBufferToBlobUrl(hotel.logo.data.data, hotel.logo.contentType)
            : null;

          return {
            logoUrl,
            hotelname: hotel.hotelname,
            location: hotel.location,
            _id: hotel._id,  // Ensure _id is part of the hotel object
          };
        });
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    },

    arrayBufferToBlobUrl(buffer, contentType) {
      try {
        const byteArray = new Uint8Array(buffer);
        const blob = new Blob([byteArray], { type: contentType });
        return URL.createObjectURL(blob);
      } catch (error) {
        console.error("Error converting buffer to Blob URL:", error);
        return null;
      }
    },

    // Navigate to the hotel dashboard with the hotel ID
    goToDashboard(hotelId) {
      this.$router.push({ name: 'HotelDashboard', params: { hotelId } });
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
