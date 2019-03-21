import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import LoginIn from "./views/login-in.vue";
import SignIn from "./views/sign-in.vue";
import ForgetPassword from "./views/forget-password.vue";
import Index from "./views/index.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: Index,
    childrens: {},
    meta: {
      title: "首页"
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginIn,
    meta: {
      title: "登录"
    }
  },
  {
    path: "/sign",
    name: "sign",
    component: SignIn,
    meta: {
      title: "注册"
    }
  },
  {
    path: "/forgetPassword",
    name: "forgetPassword",
    component: ForgetPassword,
    meta: {
      title: "重置密码"
    }
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
