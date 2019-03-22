import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import LoginIn from "./views/login-in.vue";
import SignIn from "./views/sign-in.vue";
import ForgetPassword from "./views/forget-password.vue";
import Index from "./views/index.vue";
import Task from "./views/task.vue";
import My from "./views/my.vue";
import AccountRecords from "./views/account-records.vue";
import RecordsBuyCourse from "./views/records-buy-course.vue";
import RecordsWithdraw from "./views/records-withdraw.vue";

Vue.use(Router);

const routes = [
  {
    path: "/home",
    component: Index,
    children: [],
    meta: {
      title: "首页"
    }
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
    path: "/my",
    component: My,
    children: [],
    meta: {
      title: "个人中心"
    }
  },
  {
    path: "/task",
    name: "task",
    component: Task,
    meta: {
      title: "社群任务"
    }
  },
  {
    path: "/",
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
