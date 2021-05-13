import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TelegramChanel from "@/views/TelegramChanel.vue";
import AboutRoocket from "@/views/AboutRoocket.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aboutroocket",
    name: "AboutRoocket",
    component: AboutRoocket,
  },
  {
    path: "/telegramchanel",
    name: "TelegramChanel",
    component: TelegramChanel,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
