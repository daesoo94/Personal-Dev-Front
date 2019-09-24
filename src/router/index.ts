import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router: Router = new Router({
    mode: "history",
    routes: [
        { path: "/", component: () => import(/* webpackChunkName: "Main" */ "../views/Main.vue") },
        { path: "/login", component: () => import(/* webpackChunkName: "Login" */ "../views/Login.vue") },
        { path: "/register", component: () => import(/* webpackChunkName: "Register" */ "../views/Register.vue") },
        { path: "/write", component: () => import(/* webpackChunkName: "Write" */ "../views/Write.vue") },
    ]
});