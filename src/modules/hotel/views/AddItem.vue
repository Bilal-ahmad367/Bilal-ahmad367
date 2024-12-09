<template>
  <form class="space-y-5 dark:text-white w-[60vw] m-auto ">
    <!-- File Upload Section -->
    <div class="custom-file-container" data-upload-id="myFirstImage">
      <div class="label-container">
        <label>Upload Product image</label>
        <a href="javascript:;" class="custom-file-container__image-clear" title="Clear Image" @click.prevent="clearLogo">×</a>
      </div>
      <label class="custom-file-container__custom-file">
        <input
          type="file"
          class="custom-file-container__custom-file__custom-file-input"
          accept="image/*"
          @change="handleFileUpload"
        />
        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
        <span class="custom-file-container__custom-file__custom-file-control ltr:pr-20 rtl:pl-20"></span>
      </label>
      <div class="custom-file-container__image-preview"></div>
    </div>

    <!-- Product Name Input -->
    <div>
      <label for="productName">Product Name</label>
      <input
        v-model="productName"
        id="productName"
        type="text"
        placeholder="Enter Product Name"
        class="form-input placeholder:text-white-dark"
      />
    </div>

    <!-- Description Input -->
    <div>
      <label for="description">Description</label>
      <textarea
        v-model="description"
        id="description"
        placeholder="Enter product description"
        class="form-input placeholder:text-white-dark"
      ></textarea>
    </div>

    <!-- Category Input -->
    <div>
      <label for="category">Category</label>
      <select v-model="category" id="category" class="form-select">
        <option disabled value="">Select a category</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <!-- Price Input -->
    <div>
      <label for="price">Price</label>
      <input
        v-model="price"
        id="price"
        type="number"
        placeholder="Enter price"
        class="form-input placeholder:text-white-dark"
      />
    </div>

    <!-- Submit Button -->
    <button
      type="button"
      @click="Addproduct"
      class="btn btn-gradient mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
      :disabled="loader"
    >
      <span v-if="loader">Loading...</span>
      <span v-else>Add Product</span>
    </button>

    <!-- Error Message -->
    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import "@/assets/css/file-upload-preview.css";
import axios from "axios";
import { useRouter } from "vue-router";

// Fields
const productName = ref("");
const description = ref("");
const category = ref("");
const price = ref("");

const categories = ref(['Fruits', 'Vegetables', 'Dairy', 'Grains', 'Meat', 'Beverages', 'Snacks']);
const image = ref<File | null>(null);

// UI state
const loader = ref(false);
const errorMessage = ref<string | null>(null);

// Token (assumed to be saved in localStorage)
const token = localStorage.getItem("token");
const hotelId= localStorage.getItem("hotelId")
// Initialize file upload preview
onMounted(() => {
  new FileUploadWithPreview("myFirstImage", {
    images: {
      baseImage: "/assets/images/file-preview.svg",
      backgroundImage: "",
    },
  });
});

// Handle file upload
const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (files && files[0]) {
    image.value = files[0];
  }
};

// Clear image input
const clearimage = () => {
  image.value = null;
  const fileInput = document.querySelector("input[type='file']") as HTMLInputElement;
  if (fileInput) fileInput.value = '';  // Clear the file input field
};

const router = useRouter();
// Add product function
const Addproduct = async () => {
  loader.value = true;

    // Check if hotelId exists in localStorage
  if (!hotelId) {
    errorMessage.value = "Hotel ID is missing. Please log in again.";
    loader.value = false;
    return;
  }
  const formData = new FormData();
  formData.append("productName", productName.value);
  formData.append("description", description.value);
  formData.append("category", category.value);
  formData.append("price", price.value);
 formData.append("hotelId", hotelId);
  if (image.value) {
    formData.append("image", image.value);  // Attach the image file if present
  }


  errorMessage.value = null;
  try {
    const response = await axios.post("http://localhost:5000/api/product/add", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "multipart/form-data",
      },
      params:{
        hotelId: hotelId
      }
    });
    console.log(image.value)
    console.log("API Response:", response);

    productName.value = "";
    description.value = "";
    category.value = "";
    price.value = "";
    alert("Product added successfully!");

    router.push('/hotel-dashboard/list-items');
  } catch (err: any) {
    console.error("Error:", err);
    errorMessage.value = err.response?.data?.message || "Request failed. Please try again.";
  } finally {
    loader.value = false;
  }
};
</script>

<style scoped>
/* Custom styles for the component */
</style>
