<template>
  <div :class="{ 'dark text-white-dark': store.semidark }">
    <nav
      class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300"
    >
      <div class="bg-white dark:bg-[#0e1726] h-full">
        <div class="flex justify-between items-center px-4 py-3">
          <li class="main-logo flex items-center shrink-0">
            <!-- Dynamically load hotel logo -->
            <div>
              <img
                v-if="hotel?.logoUrl"
                :src="hotel.logoUrl"
                alt="Hotel Logo"
                class="w-8 ml-[5px] flex-none"
              />
            </div>
            <!-- Dynamically load hotel name -->
            <span
              class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light"
            >
              {{ hotel?.hotelname || "VRISTO" }}
            </span>
          </li>
          <a
            href="javascript:;"
            class="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180 hover:text-primary"
            @click="store.toggleSidebar()"
          >
            <icon-carets-down class="m-auto rotate-90" />
          </a>
        </div>
        <perfect-scrollbar
          :options="{
            swipeEasing: true,
            wheelPropagation: false,
          }"
          class="h-[calc(100vh-80px)] relative"
        >
          <ul class="relative font-semibold space-y-0.5 p-4 py-0">
            <li class="menu nav-item">
              <button
                type="button"
                class="nav-link group w-full"
                :class="{ active: activeDropdown === 'dashboard' }"
                @click="
                  activeDropdown === 'dashboard'
                    ? (activeDropdown = null)
                    : (activeDropdown = 'dashboard')
                "
              >
                <div class="flex items-center">
                  <icon-menu-dashboard
                    class="group-hover:!text-primary shrink-0"
                  />
                  <span
                    class="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark"
                  >
                    {{ $t("dashboard") }}
                  </span>
                </div>
                <div
                  :class="{
                    'rtl:rotate-90 -rotate-90': activeDropdown !== 'dashboard',
                  }"
                >
                  <icon-caret-down />
                </div>
              </button>
              <vue-collapsible :isOpen="activeDropdown === 'dashboard'">
                <ul class="sub-menu text-gray-500">
                  <li>
                    <router-link
                      :to="`/hotel-dashboard/add-item`"
                      @click="toggleMobileMenu"
                    >
                      {{ $t("add item") }}
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/hotel-dashboard/list-items"
                      @click="toggleMobileMenu"
                      >{{ $t("list items") }}</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/hotel-dashboard/orders"
                      @click="toggleMobileMenu"
                      >{{ $t("orders") }}</router-link
                    >
                  </li>
                </ul>
              </vue-collapsible>
            </li>
          </ul>
        </perfect-scrollbar>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>

import { ref, onMounted, computed, watch } from "vue";

import { useAppStore } from "@/core/store/index";
import VueCollapsible from "vue-height-collapsible/vue3";

import IconCaretDown from "@/core/components/icon/icon-caret-down.vue";
import IconMenuDashboard from "@/core/components/icon/menu/icon-menu-dashboard.vue";
import { useStore } from "vuex";
const store = useAppStore();
const vuexStore = useStore();
const activeDropdown: any = ref("");
const subActive: any = ref("");

const hotelId = localStorage.getItem('hotelId')
const hotel = computed(() => vuexStore.getters["hotel/hotel"]); // Access hotel data from Vuex

// Actions
const getHotelById = (id) => {
  vuexStore.dispatch("hotel/getHotelById").catch((error) => {
    console.error("Failed to fetch hotel data:", error);
  });
};
onMounted(() => {
   console.log('hotelId passed to sidebar:', hotelId); 
  if (hotelId) {
    getHotelById(hotelId);
  }

  const selector = document.querySelector(
    '.sidebar ul a[href="' + window.location.pathname + '"]'
  );
  if (selector) {
    selector.classList.add("active");
    const ul: any = selector.closest("ul.sub-menu");
    if (ul) {
      let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link") || [];
      if (ele.length) {
        ele = ele[0];
        setTimeout(() => {
          ele.click();
        });
      }
    }
  }
});

const toggleMobileMenu = () => {
  if (window.innerWidth < 1024) {
    store.toggleSidebar();
  }
};
</script>
