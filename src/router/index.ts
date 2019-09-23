import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router: Router = new Router({
    mode: "history",
    routes: [
        { path: "/", component: () => import(/* webpackChunkName: "Main" */ "../views/Main.vue") },
        { path: "/login", component: () => import(/* webpackChunkName: "Main" */ "../views/login.vue") },
        { path: "/register", component: () => import(/* webpackChunkName: "Main" */ "../views/register.vue") },
        { path: "/write", component: () => import(/* webpackChunkName: "Main" */ "../views/Write.vue") },
    ]
});