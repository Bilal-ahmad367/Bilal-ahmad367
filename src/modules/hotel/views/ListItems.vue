<template>
  <div class="container mx-auto mt-10">
    <!-- Loader -->
    <div v-if="loader" class="text-center text-blue-500">
      Loading products...
    </div>

    <!-- Product List -->
    <div v-else-if="product.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in product"
        :key="item._id"
        class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-200 ease-in-out"
      >
        <img
          v-if="item.imageUrl"
          :src="item.imageUrl"
          alt="product image"
          class="w-24 h-24 object-cover rounded-full mx-auto"
        />
        <h2 class="text-xl font-semibold text-center mt-4">
          {{ item.productname }}
        </h2>
        <p class="text-center text-gray-600">{{ item.description }}</p>
        <p class="text-center text-gray-600">{{ item.category }}</p>
        <p class="text-center text-gray-600">{{ item.price }}</p>

        <!-- Go to Dashboard Button -->
        <button
          @click="goToDashboard(item._id)"
          class="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Go to product Dashboard
        </button>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center text-gray-600">
      No products found.
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Userproduct",
  data() {
    return {
      product: [], // List of products to be displayed
      loader: false, // Loader flag for fetching products
    };
  },
  mounted() {
    this.fetchproduct(); // Fetch products when component is mounted
  },
  methods: {
    // Fetch products from API
    async fetchproduct() {
      const hotelId = localStorage.getItem("hotelId"); // Get hotelId from local storage
      if (!hotelId) {
        console.error("Hotel ID not found in local storage");
        return;
      }

      try {
        const token = localStorage.getItem("token"); // Get token from local storage
        if (!token) {
          console.error("Token not found in local storage");
          return;
        }

        this.loader = true; // Set loader to true while fetching data
        const response = await axios.get("http://localhost:5000/api/product/by-hotel", {
          headers: {
            Authorization: `Bearer ${token}`, // Send Authorization token in header
          },
          params: {
            hotelId: hotelId, // Send hotelId as a query parameter
          },
        });

        this.loader = false; // Set loader to false after data is fetched

        // Check if there are products in the response
        if (response.data.products && response.data.products.length) {
          this.product = response.data.products.map((prod) => {
            // Convert image data if available
            const imageUrl = prod.image?.data?.data?.data
              ? this.arrayBufferToBlobUrl(
                  prod.image.data.data.data,
                  prod.image.contentType
                )
              : null;

            return {
              imageUrl,
              productname: prod.productName, // Map fields appropriately
              category: prod.category,
              _id: prod._id,
              description: prod.description,
              price: prod.price,
            };
          });
        } else {
          this.product = []; // If no products found, set product to empty array
        }
      } catch (error) {
        this.loader = false; // Hide loader in case of an error
        console.error("Error fetching products:", error);
      }
    },

    // Convert ArrayBuffer to Blob URL for images
    arrayBufferToBlobUrl(buffer, contentType) {
      try {
        let byteArray;
        if (typeof buffer === "string") {
          // Decode base64 string to byte array
          byteArray = this.base64ToByteArray(buffer);
        } else {
          // Assume buffer is already in Uint8Array format
          byteArray = new Uint8Array(buffer);
        }

        const blob = new Blob([byteArray], { type: contentType }); // Create Blob object
        return URL.createObjectURL(blob); // Create a Blob URL
      } catch (error) {
        console.error("Error converting buffer to Blob URL:", error);
        return null;
      }
    },

    // Helper method to convert base64 to byte array
    base64ToByteArray(base64) {
      const binaryString = atob(base64);
      const len = binaryString.length;
      const byteArray = new Uint8Array(len);

      for (let i = 0; i < len; i++) {
        byteArray[i] = binaryString.charCodeAt(i);
      }

      return byteArray;
    },

    // Navigate to the product dashboard with the product ID
    goToDashboard(productId) {
      this.$router.push({ name: "productDashboard", params: { productId } });
    },
  },
};
</script>

<style scoped>
/* Add additional styling if needed */
</style>
