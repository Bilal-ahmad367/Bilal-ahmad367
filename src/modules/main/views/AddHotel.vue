<template>
  <form class="space-y-5 dark:text-white w-[40vw] m-auto">
    <!-- File Upload Section -->
    <div class="custom-file-container" data-upload-id="myFirstImage">
      <div class="label-container">
        <label>Upload your logo</label>
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

    <!-- Hotel Name Input -->
    <div>
      <label for="hotelName">Hotel Name</label>
      <div class="relative text-white-dark">
        <input
          v-model="hotelName"
          id="hotelName"
          type="text"
          placeholder="Enter Hotel Name"
          class="form-input ps-10 placeholder:text-white-dark"
          :class="{ 'border-red-500': $v.hotelName.$error }"
        />
        <span class="absolute start-4 top-1/2 -translate-y-1/2">
          <icon-mail :fill="true" />
        </span>
      </div>
      <span v-if="$v.hotelName.$error" class="text-red-500 text-sm">Hotel Name is required</span>
    </div>

    <!-- Location Input -->
    <div>
      <label for="location">Location</label>
      <div class="relative text-white-dark">
        <input
          v-model="location"
          id="location"
          type="text"
          placeholder="Enter location"
          class="form-input ps-10 placeholder:text-white-dark"
          :class="{ 'border-red-500': $v.location.$error }"
        />
        <span class="absolute start-4 top-1/2 -translate-y-1/2">
          <icon-lock-dots :fill="true" />
        </span>
      </div>
      <span v-if="$v.location.$error" class="text-red-500 text-sm">Location is required</span>
    </div>

    <!-- Submit Button -->
    <button
      type="button"
      @click="Addhotel"
      class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
      :disabled="loader"
    >
      <span v-if="loader">Loading...</span>
      <span v-else>Add hotel</span>
    </button>

    <!-- Error Message -->
    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import FileUploadWithPreview from "file-upload-with-preview";
import "file-upload-with-preview/dist/file-upload-with-preview.min.css";
import "@/assets/css/file-upload-preview.css";

import { AddHotel } from '@/modules/main/composables/useAuth';
import axios from "axios";
import { useRouter } from "vue-router";

// Fields
const hotelName = ref("");
const location = ref("");
const logoFile = ref<File | null>(null);

// Vuelidate setup
const rules = {
  hotelName: { required },
  location: { required },
};
const $v = useVuelidate(rules, { hotelName, location });

// UI state
const loader = ref(false);
const errorMessage = ref<string | null>(null);

// Token (assumed to be saved in localStorage, or you can get it from your authentication state)
const token = localStorage.getItem("token");

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
    logoFile.value = files[0];
    console.log("Selected file:", logoFile.value); // Debug: check the file is set
  }
};

// Clear the logo field
const clearLogo = () => {
  logoFile.value = null;
  const fileInput = document.querySelector("input[type='file']") as HTMLInputElement;
  if (fileInput) fileInput.value = '';  // Clear the file input field
};

  const router = useRouter();
// Add hotel function
const Addhotel = async () => {
  loader.value=true;
  $v.value.$touch(); // Trigger validation messages
  if ($v.value.$invalid) {
    console.warn("Validation failed.");
    return;
  }

  const formData = new FormData();
  formData.append("hotelname", hotelName.value);
  formData.append("location", location.value);
  if (logoFile.value) {
    formData.append("logo", logoFile.value);  // Attach the logo file if present
  }

  // Set loading state and clear previous error message
  loader.value = true;
  errorMessage.value = null;

  try {
    // Make the API request
    let response = await AddHotel(formData);
    console.log("API Response:", response);  // Log the API response

    // Handle success based on response
      hotelName.value = '';
      location.value = '';
      logoFile.value = null; 
      $v.value.$reset(); 
      alert("Hotel added successfully!");

     router.push('/all-hotels')
   
  } catch (err: any) {
    // Detailed error logging
    console.error("Error:", err);
    console.error("Error response:", err.response);
    console.error("Error message:", err.message);

    // Set error message based on the error response structure
    if (err.response && err.response.data && err.response.data.message) {
      errorMessage.value = err.response.data.message;
    } else {
      errorMessage.value = "Request failed. Please try again.";
    }
  } finally {
    loader.value = false;  // Reset loading state
  }
};
</script>

<style scoped>
/* Your custom styles for the component */
</style>
