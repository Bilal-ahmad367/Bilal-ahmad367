export const authRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/modules/auth/views/Login.vue'),
        meta: {
            layout: 'auth',
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/modules/auth/views/Register.vue'),
        meta: {
            layout: 'auth',
            requiresAuth: false
        }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: () => import('@/modules/auth/views/ResetPassword.vue'),
        meta: {
            layout: 'auth',
            requiresAuth: false
        }
    },
];

export const appRoutes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/core/views/Dashboard.vue'),
        meta: {
            layout: 'app',
            requiresAuth: true, // Set to true for authenticated users
            requiredPermissions: ['view_dashboard'] // Example permission required
        },
       
    },
    {
        path: '/add-hotel',
        name: 'addhotel',
        component: () => import('@/core/views/AddHotel.vue'),
        meta: {
            layout: 'app',
            requiresAuth: true, // Set to true for authenticated users
        },
       
    },
];  

export const hotelRoutes = [
    {
        path: '/hotel-overview',
        name: 'hotelOverview',
        component: () => import('@/core/views/HotelOverview.vue'),
        meta: {
            layout: 'hotel',
            requiresAuth: true,
        },
    },
];
