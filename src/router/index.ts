import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import OrderEquipment from "../views/OrderEquipment.vue";
import PreLoginLayout from "../layouts/PreLoginLayout.vue";
import PastLoginLayout from "../layouts/PastLoginLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: PreLoginLayout },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: PreLoginLayout },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { layout: PreLoginLayout },
  },

  {
    path: "/workspace",
    name: "Workspace",
    meta: { layout: PastLoginLayout },
    component: OrderEquipment,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/OrderEquipment.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
