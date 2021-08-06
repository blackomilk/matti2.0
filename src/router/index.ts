import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/matti",
  },
  {
    path: "/",
    name: "matti",
    component: () => import("../components/hellomatii.vue"),
  },
  {
    path: "/matti",
    name: "matti",
    component: () => import("../components/hellomatii.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../components/profile.vue"),
  },
  {
    path: "/swiper",
    name: "swiper",
    component: () => import("../components/swiper.vue"),
  },
  {
    path: "/uppullpage",
    name: "upPullPage",
    component: () => import("../components/uppullpage.vue"),
  },
  {
    path: "/skill",
    name: "skill",
    component: () => import("../components/skills.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
