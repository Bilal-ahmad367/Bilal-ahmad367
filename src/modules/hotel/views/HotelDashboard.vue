<template>
  <div>
    <h1>welcome to your hotel, most welcome lol!</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: "HotelDashboard",
  props: ['hotelId'],
  setup(props) {
    const store = useStore();

    // Save hotelId to localStorage
    const saveHotelId = () => {
      localStorage.setItem('hotelId', props.hotelId);
    };

    // Optionally, fetch hotel data by ID (if needed)
    const hotel = computed(() => store.getters['hotel/hotel']); 
    
    const fetchHotelData = (id: string) => {
      store.dispatch('hotel/getHotelById', id).catch((error) => {
        console.error("Failed to fetch hotel data:", error);
      });
    };

    onMounted(() => {
      if (props.hotelId) {
        fetchHotelData(props.hotelId);  // Call action to fetch hotel data on mount
      }

      saveHotelId();  // Store the hotelId in localStorage
    });

    return {
      hotel
    };
  },
});
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
