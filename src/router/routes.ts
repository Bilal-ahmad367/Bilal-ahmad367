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
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/core/views/Dashboard.vue'),
        meta: {
            layout: 'app',
            requiresAuth: false, // Set to true for authenticated users
        },
       
    },
    {
        path: '/add-hotel',
        name: 'addhotel',
        component: () => import('@/modules/main/views/AddHotel.vue'),
        meta: {
            layout: 'app',
            requiresAuth: false, // Set to true for authenticated users
        },
       
    },
    {
        path: '/all-hotels',
        name: 'allhotels',
        component: () => import('@/modules/main/views/allhotels.vue'),
        meta: {
            layout: 'app',
            requiresAuth: false, // Set to true for authenticated users
        },
       
    },
];  

export const hotelRoutes = [
    {
        path: '/hotel-dashboard/:hotelId',
        name: 'HotelDashboard',
        component: () => import('@/modules/hotel/views/HotelDashboard.vue'),
        meta: {
            layout: 'hotel',
            // requiresAuth: true,
        },
        props: true,
       
    },
    
        {
            path: '/hotel-dashboard/add-item',
            name: 'AddItem',
            component: () => import('@/modules/hotel/views/AddItem.vue'),
            meta: {
                layout: 'hotel',
                // requiresAuth: true,
            }
        },
        {
            path: '/hotel-dashboard/list-items',
            name: 'ListItems',
            component: () => import('@/modules/hotel/views/ListItems.vue'),
            meta: {
                layout: 'hotel',
                // requiresAuth: true,
            }
        },
        {
            path: '/hotel-dashboard/orders',
            name: 'Orders',
            component: () => import('@/modules/hotel/views/orders.vue'),
            meta: {
                layout: 'hotel',
                // requiresAuth: true,
            }
        }
    
];

