export const authRoutes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/modules/auth/views/Login.vue"),
    meta: {
      layout: "auth",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/modules/auth/views/Register.vue"),
    meta: {
      layout: "auth",
      requiresAuth: false,
    },
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: () => import("@/modules/auth/views/ResetPassword.vue"),
    meta: {
      layout: "auth",
      requiresAuth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("@/modules/auth/views/ForgotPasword.vue"),
    meta: {
      layout: "auth",
      requiresAuth: false,
    },
  },
]; 

export const appRoutes = [
  // Dashboard Routing
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/core/views/Dashboard.vue"),
    meta: {
      layout: "app",
      requiresAuth: true, // Set to true for authenticated users
    },
  },

  //  hotel Routes
  {
    path: "/hotel/add-hotel",
    name: "add-hotel",
    component: () => import("@/modules/hotels/veiws/AddHotel.vue"),
    meta: {
      layout: "app",
      requiresAuth: true, // Set to true for authenticated users
    },
  },
  {
    path: "/hotel/all-hotelS",
    name: "all-hotels",
    component: () => import("@/modules/hotels/veiws/AllHotel.vue"),
    meta: {
      layout: "app",
      requiresAuth: true, // Set to true for authenticated users
    },
  },




  
  {
    path: "/:catchAll(.*)", // This will catch all undefined routes
    redirect: "/login",
  }
];
