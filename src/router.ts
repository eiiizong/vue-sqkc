import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Index from "./views/index.vue";
import Home from "./views/home.vue";
import Login from "./views/login-in.vue";
import Sign from "./views/sign-in.vue";
import RealTime from "./views/sign-in.vue";

import ForgetPassword from "./views/forget-password.vue";

import Task from "./views/task.vue";
import My from "./views/my.vue";
import AccountRecords from "./views/account-records.vue";
import RecordsBuyCourse from "./views/records-buy-course.vue";
import RecordsWithdraw from "./views/records-withdraw.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: 'Index',
    component: Index,
    children: [
      {
        path: "",
        name: 'Home',
        component: Home,
        meta: {
          title: "首页"
        },
      },
      {
        path: "my",
        name: 'My',
        component: My,
        meta: {
          title: "个人中心"
        }
      },
      {
        path: "realTime",
        name: 'RealTime',
        component: RealTime,
        meta: {
          title: "实时播报"
        }
      },
      {
        path: "task",
        name: "task",
        component: Task,
        meta: {
          title: "社群任务"
        }
      },
    ],
  },
  {
    path: "/accountRecords",
    component: AccountRecords,
    children: [
      {
        path: 'buyCourse',
        name: 'RecordsBuyCourse',
        component: RecordsBuyCourse
      },
      {
        path: 'withdraw',
        name: 'RecordsWithdraw',
        component: RecordsWithdraw,
      }
    ],
    meta: {
      title: "账户记录"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登录"
    }
  },
  {
    path: "/sign",
    name: "Sign",
    component: Sign,
    meta: {
      title: "注册"
    }
  },
  {
    path: "/forgetPassword",
    name: "ForgetPassword",
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
