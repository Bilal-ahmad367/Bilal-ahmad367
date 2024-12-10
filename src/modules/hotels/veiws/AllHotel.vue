<template>
  <div>
    <div class="panel pb-0 mt-6">
      <div class="flex md:items-center md:flex-row flex-col mb-5 gap-5">
        <div class="ltr:ml-auto rtl:mr-auto">
          <input v-model="search" type="text" class="form-input w-auto" placeholder="Search..." />
        </div>
      </div>


      <div class="datatable">
        <vue3-datatable
          :rows="rows" :columns="cols" :totalRows="rows?.length" :search="search" :pageSize="10"
          :stickyHeader="true" :hasCheckbox="true" :pageSizeOptions="[10, 25, 50, 100, 'All']"
           class="custom-table"
          skin="whitespace-nowrap bh-table-hover"
          firstArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
          lastArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg> '
          previousArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'
          nextArrow='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180"> <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </svg>'>

          <template #action="data">
            <div class="flex items-center gap-1">
              <!-- Approve Button -->
              <div>
                <button @click="editRow(data)" type="button" v-tippy="{ content: 'edit' }">
                  <Icon-Edit />
                </button>
              </div>
              <!-- Reject Button -->
              <div>
                <button @click="deleteRow(data)" type="button" v-tippy="{ content: 'delete' }">
                  <Icon-Delete />
                </button>
              </div>
            </div>
          </template>

        </vue3-datatable>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Vue3Datatable from '@bhplugin/vue3-datatable';
  import { getAllHotels } from '../composables/useHotel';
  import IconEdit from '@/core/components/icon/icon-edit.vue'
  import IconDelete from '@/core/components/icon/icon-trash.vue'
  import { useAppStore } from "@/core/store";
  const store = useAppStore();
  const search = ref('');
  const errorMessage = ref('');
  const cols = ref([
    { field: '_id', title: 'ID' },
    { field: 'hotelname', title: 'name' },
    { field: 'location', title: 'location' },
    { field: 'createdAt', title: 'created At' },
    { field: 'updatedAt', title: 'updated At' },

    { field: 'action', title: 'Action', searchable: false },
  ]);

  const rows = ref([]);

  const isEditing = ref(false);
  const editingHotel = ref({
    hotelname: '',
    location: '',
  });

 

  const editRow =(row)=>{
    editingHotel.value = { ...row }; 
    isEditing.value = true;
  }
  const deleteRow =(data)=>{
    console.log("Deleting row with ID:", data.value._id);
  }
  const getAllhotels = async () => {

    try {
      store.isShowMainLoader = true;
      let response: any = await getAllHotels();
      rows.value = response;
    } catch (error: any) {
      errorMessage.value = error.response?.data?.message || "Request failed";
      console.error(error);
    } finally {
      store.isShowMainLoader = false;
    }
  };

  onMounted(async () => {
    await getAllhotels();
  });
</script>

<style>
/* Sticky first three columns */
.custom-table th:nth-child(1),
.custom-table td:nth-child(1) {
  position: sticky;
  left: 0;
  background-color: rgb(246 248 250) !important;
  z-index: 1;
}

/* Sticky last column */
.custom-table th:last-child,
.custom-table td:last-child {
  position: sticky;
  right: 0;
  background-color: rgb(246 248 250) !important;
  z-index: 1;
}
/* Style the checkbox size */
.custom-table .datatable-checkbox input[type="checkbox"] {
  transform: scale(0.8); /* Adjust the size */
  margin: 0; /* Remove extra space around the checkbox */
}

</style>