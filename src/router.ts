import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import LoginIn from "./views/login-in.vue";
import SignIn from "./views/sign-in.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: SignIn
  },
  {
    path: "/login",
    name: "login-in",
    component: LoginIn
  },
  {
    path: "/sign",
    name: "login-in",
    component: SignIn
  },
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
