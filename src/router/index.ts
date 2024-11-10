import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import appSetting from '@/app-setting';
import { useAppStore } from '@/core/store';
import { authRoutes, appRoutes } from './routes';

const routes: RouteRecordRaw[] = [...authRoutes, ...appRoutes];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});

router.beforeEach((to, from, next) => {
    const store = useAppStore();
    
    if (to.meta.layout === 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }
    
    // Authentication check
    // if (to.meta.requiresAuth && !store.isAuthenticated) {
    //     // Redirect to login if the user is not authenticated
    //     return next({ name: 'login' });
    // }
    
    // // Permission check
    // const requiredPermissions = to.meta.requiredPermissions;
    // if (requiredPermissions && !requiredPermissions.every(perm => store.userPermissions.includes(perm))) {
    //     // Redirect to unauthorized page or dashboard if permissions are insufficient
    //     return next({ name: 'dashboard' });
    // }
    
    next();
});

router.afterEach(() => {
    appSetting.changeAnimation();
});

export default router;
