<template>
  <form class="space-y-5 dark:text-white  m-auto panel">
    <h1 class="text-center text-3xl font-bold text-indigo-700 mt-5 flex flex-col justify-center items-center">
      <span class="inline-block">
        <hotel />
      </span>
      <span class="mt-3">Add Your Hotel</span>
    </h1>
    <!-- Photo Upload Field -->
    <div class="mb-3" :class="{
      'has-error': $v.logoFile.$error,
      'has-success': hoteldatavalidation && !$v.logoFile.$error,
    }">
      <label for="Photo">{{ $t("Upload logo ") }}</label>
      <div class="relative text-white-dark">
        <input id="Photo" type="file" accept="image/*" @change="handleFileUpload"
          class="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary" />
        <span v-if="!$v.logoFile.$pending && $v.logoFile.$error" class="text-red-500 text-sm">
          Only JPEG or PNG files are allowed.
        </span>
      </div>
    </div>
    <!-- Hotel Name Input -->
    <div class="mb-3" :class="{
      'has-error': $v.hotelName.$error,
      'has-success': hoteldatavalidation && !$v.hotelName.$error,
    }">
      <label for="hotelName">Hotel Name</label>
      <div class="relative text-white-dark">
        <input v-model="hotelName" id="hotelName" type="text" placeholder="Enter Hotel Name"
          class="form-input ps-10 placeholder:text-white-dark" :class="{ 'border-red-500': $v.hotelName.$error }" />
        <span class="absolute start-4 top-1/2 -translate-y-1/2">
          <add_hotel :fill="true" />
        </span>
      </div>
      <span v-if="$v.hotelName.$error" class="text-red-500 text-sm">and must b eat least 4 character</span>
    </div>

    <!-- Location Input -->
    <div class="mb-3" :class="{
      'has-error': $v.location.$error,
      'has-success': hoteldatavalidation && !$v.location.$error,
    }">
      <label for="location">Location</label>
      <div class="relative text-white-dark">
        <input v-model="location" id="location" type="text" placeholder="Enter location"
          class="form-input ps-10 placeholder:text-white-dark" :class="{ 'border-red-500': $v.location.$error }" />
        <span class="absolute start-4 top-1/2 -translate-y-1/2">
          <Location :fill="true" />
        </span>
      </div>
      <span v-if="$v.location.$error" class="text-red-500 text-sm">Location is required and must b eat least 4
        character</span>
    </div>

    <!-- Submit Button -->
    <button type="button" @click="Addhotel"
      class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
      <span>Add hotel</span>
    </button>

    <!-- Error Message -->
    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
  </form>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import useVuelidate from "@vuelidate/core";
  import { minLength, required } from "@vuelidate/validators";

  import Swal from "sweetalert2";
  import { useAppStore } from "@/core/store";
  const store = useAppStore();
  import { AddHotel } from '@/modules/hotels/composables/useHotel';
  import { useRouter } from "vue-router";
  import add_hotel from '@/core/components/icon/icon-plus.vue'
  import Location from '@/core/components/icon/icon-location.vue'
  import hotel from '@/core/components/icon/icon-Hotel.vue'

  // Fields
  const hoteldatavalidation = ref(false)
  const hotelName = ref("");
  const location = ref("");
  const logoFile = ref<File | null>(null);


  // Custom validator for file type
  const fileType = (file: File | null) => {
    if (!file) return true; // If no file is selected, it's valid
    const validTypes = ['image/jpeg', 'image/png']; // Allowed MIME types
    return validTypes.includes(file.type);
  };
  // Vuelidate setup
  const rules = {
    hotelName: { required, minLength: minLength(4) },
    location: { required, minLength: minLength(4) },
    logoFile: { required, fileType }
  };
  const $v = useVuelidate(rules, { hotelName, location, logoFile });

  // UI state

  const errorMessage = ref<string | null>(null);


  // Handle file upload
  const handleFileUpload = (event: Event) => {
    const file = event.target.files?.[0];

    if (file) {
      logoFile.value = file; // Update the data property
      $v.value.logoFile.$touch();
    } else {
      console.error("No file selected.");
    }

  };

  //sweet alert
  const showMessage = (msg = "", type = "success") => {
    const toast: any = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      customClass: { container: "toast" },
    });
    toast.fire({
      icon: type,
      title: msg,
      padding: "10px 20px",
    });
  };


  const router = useRouter();
  const Addhotel = async () => {
    hoteldatavalidation.value = true;
    $v.value.$touch(); // Trigger validation messages
    if ($v.value.$invalid) {
      console.warn("Validation failed.");
      return;
    }

    const formData = new FormData();
    formData.append("hotelname", hotelName.value);
    formData.append("location", location.value);

    if (logoFile.value) {
      console.log("Appending logo file:", logoFile.value.name, logoFile.value.size);
      formData.append("logo", logoFile.value);
    } else {
      console.warn("No logo file selected.");
    }


    try {
      store.isShowMainLoader = true;
      const response = await AddHotel(formData);
      showMessage("Hotel added successfully!");
      router.push('/hotel/all-hotels');
    } catch (err: any) {
      console.error("Error:", err);
      errorMessage.value = err.response?.data?.message || "Request failed. Please try again.";
    } finally {
      store.isShowMainLoader = false;
    }
  };

</script>

<style scoped>
  /* Your custom styles for the component */
</style>