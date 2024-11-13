<template>
  <div>
    <p>This is the hotel dashboard.</p>
    <p>Hotel ID: {{ hotelId }}</p>
  </div>
</template>

<script>
export default {
  name: "hotel-dashboard",
  props: ['hotelId'],
  computed: {
    hotelId() {
      // Get the hotelId from the route params
      return this.$route.params.hotelId;
    },
  },
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
