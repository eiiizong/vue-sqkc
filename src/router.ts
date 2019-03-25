import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Index from "./views/index.vue";
import Home from "./views/home.vue";
import Task from "./views/task.vue";
import My from "./views/my.vue";
import RealTime from "./views/real-time.vue";

import TaskToReceive from "./views/task-to-receive.vue";
import TaskInReview from "./views/task-in-review.vue";
import TaskRule from "./views/task-rule.vue";
import TaskRunning from "./views/task-running.vue";


import Login from "./views/login-in.vue";
import Sign from "./views/sign-in.vue";
import ForgetPassword from "./views/forget-password.vue";

import AccountRecords from "./views/records-account.vue";
import RecordsBuyCourse from "./views/records-buy-course.vue";
import RecordsWithdraw from "./views/records-withdraw.vue";
import GetTask from "./views/records-get-task.vue";
import RecordsFour from "./views/records-four.vue";


import ImmediatelyBuy from "./views/immediately-buy.vue";



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
        },
        children: [
          {
            path: '',
            component: TaskToReceive,
            name: 'taskToReceive',
            meta: {
              title: "社群任务"
            },
          },
          {
            path: 'inReview',
            component: TaskInReview,
            name: 'taskInReview',
            meta: {
              title: "社群任务"
            },
          },
          {
            path: 'rule',
            component: TaskRule,
            name: 'taskRule',
            meta: {
              title: "社群任务"
            },
          },
          {
            path: 'running',
            component: TaskRunning,
            name: 'taskRunning',
            meta: {
              title: "社群任务"
            },
          }
        ]
      },
    ],
  },
  {
    path: "/accountRecords",
    component: AccountRecords,
    meta: {
      title: "账户记录"
    },
    children: [
      {
        path: '',
        name: 'GetTask',
        component: GetTask,
        meta: {
          title: "账户记录"
        }
      },
      {
        path: 'buyCourse',
        name: 'RecordsBuyCourse',
        component: RecordsBuyCourse,
        meta: {
          title: "账户记录"
        }
      },
      {
        path: 'withdraw',
        name: 'RecordsWithdraw',
        component: RecordsWithdraw,
        meta: {
          title: "账户记录"
        }
      },
      {
        path: 'four',
        name: 'RecordsFour',
        component: RecordsFour,
        meta: {
          title: "账户记录"
        }
      }
    ],
    
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
  },
  {
    path: "/immediatelyBuy",
    name: "ImmediatelyBuy",
    component: ImmediatelyBuy,
    meta: {
      title: "立即买入"
    }
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
