import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const router: Router = new Router({
    mode: "history",
    routes: [
        { path: "/", name: 'Home', component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue") },
        { path: "/login", name: 'Login', component: () => import(/* webpackChunkName: "Login" */ "../views/Login.vue") },
        { path: "/register", name: 'Register', component: () => import(/* webpackChunkName: "Register" */ "../views/Register.vue") },
        { path: "/write", name: 'Write', component: () => import(/* webpackChunkName: "Write" */ "../views/Write.vue") },
        { path: "/contact", name: 'Contact', component: () => import(/* webpackChunkName: "Contact" */ "../views/Contact.vue") },
        { path: "/about", name: 'About', component: () => import(/* webpackChunkName: "About" */ "../views/About.vue") },
    ]
});