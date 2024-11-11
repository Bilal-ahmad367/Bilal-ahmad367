<template>
    <div
        class="main-section antialiased relative font-nunito text-sm font-normal"
        :class="[store.sidebar ? 'toggle-sidebar' : '', store.menu, store.layout, store.rtlClass]"
    >
        <component v-bind:is="mainLayout"></component>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    import appLayout from '@/layouts/app-layout.vue';
    import authLayout from '@/layouts/auth-layout.vue';
    import hotelLayout from '@/layouts/hotel-layout.vue';

    import { useAppStore } from '@/core/store/index';
    import { useMeta } from '@/core/composables/use-meta';

    const store = useAppStore();

    // meta
    useMeta({ title: 'Sales Admin' });
    store.setMainLayout('auth');
    console.log('store.mainLayout', store.mainLayout);

    const mainLayout = computed(() => {
         if (store.mainLayout === 'hotel') {
            return hotelLayout; // Return the hotel layout
        }
        return store.mainLayout === 'auth' ? authLayout : appLayout;
    });
</script>
