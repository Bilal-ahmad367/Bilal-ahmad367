import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import appSetting from '@/app-setting';
import { useAppStore } from '@/core/store'; // This is your Pinia store
import { authRoutes, appRoutes, hotelRoutes } from './routes';
import vuexStore from '@/modules/store'; // Import Vuex store for auth

const routes: RouteRecordRaw[] = [...authRoutes, ...appRoutes, ...hotelRoutes];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition ? savedPosition : { left: 0, top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    // Use Pinia for layout settings
    const piniaStore = useAppStore();
    
    if (to.meta.layout === 'auth') {
        piniaStore.setMainLayout('auth');
    } else if (to.meta.layout === 'hotel') {
        piniaStore.setMainLayout('hotel');
    } else {
        piniaStore.setMainLayout('app');
    }

    // // Authentication check using Vuex
    // if (to.meta.requiresAuth && !vuexStore.getters['auth/isAuthenticated']) {
    //     return next({ name: 'login' }); // Redirect to login if not authenticated
    // }

    next(); // Proceed to route if authenticated or if no auth required
});

router.afterEach(() => {
    appSetting.changeAnimation();
});

export default router;
