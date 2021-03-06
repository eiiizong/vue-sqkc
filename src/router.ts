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
import HisTeamMembers from "./views/his-team-members.vue";
import PromoteQRCode from "./views/promote-QR-code.vue";
import BuyCourse from "./views/course-buy.vue";
import CourseDetail from "./views/course-detail.vue";
import PayWay from "./views/pay-way.vue";
import Pay from "./views/pay.vue";
import PayResult from "./views/pay-result.vue";
import GetCash from "./views/get-cash.vue";
import Review from "./views/review.vue";
import TaskDetail from "./views/task-detail.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        meta: {
          title: "首页"
        }
      },
      {
        path: "my",
        name: "my",
        component: My,
        meta: {
          title: "个人中心"
        }
      },
      {
        path: "realTime",
        name: "realTime",
        component: RealTime,
        meta: {
          title: "实时播报"
        }
      },
      {
        path: "task",
        name: "task",
        component: Task,
        children: [
          {
            path: "",
            component: TaskToReceive,
            name: "taskToReceive",
            meta: {
              title: "社群任务"
            }
          },
          {
            path: "inReview",
            component: TaskInReview,
            name: "taskInReview",
            meta: {
              title: "社群任务"
            }
          },
          {
            path: "rule",
            component: TaskRule,
            name: "taskRule",
            meta: {
              title: "社群任务"
            }
          },
          {
            path: "running",
            component: TaskRunning,
            name: "taskRunning",
            meta: {
              title: "社群任务"
            }
          }
        ]
      }
    ]
  },
  {
    path: "/accountRecords",
    component: AccountRecords,
    children: [
      {
        path: "",
        name: "getTask",
        component: GetTask,
        meta: {
          title: "账户记录"
        }
      },
      {
        path: "buyCourse",
        name: "recordsBuyCourse",
        component: RecordsBuyCourse,
        meta: {
          title: "账户记录"
        }
      },
      {
        path: "withdraw",
        name: "recordsWithdraw",
        component: RecordsWithdraw,
        meta: {
          title: "账户记录"
        }
      },
      {
        path: "four",
        name: "recordsFour",
        component: RecordsFour,
        meta: {
          title: "账户记录"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登录"
    }
  },
  {
    path: "/sign",
    name: "sign",
    component: Sign,
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
  },
  {
    path: "/immediatelyBuy",
    name: "immediatelyBuy",
    component: ImmediatelyBuy,
    meta: {
      title: "立即买入"
    }
  },
  {
    path: "/hisTeamMembers",
    name: "hisTeamMembers",
    component: HisTeamMembers,
    meta: {
      title: "他的组员"
    }
  },
  {
    path: "/promoteQRCode",
    name: "promoteQRCode",
    component: PromoteQRCode,
    meta: {
      title: "推广二维码"
    }
  },
  {
    path: "/buyCourse",
    name: "buyCourse",
    component: BuyCourse,
    meta: {
      title: "购买课程"
    }
  },
  {
    path: "/courseDetail",
    name: "courseDetail",
    component: CourseDetail,
    meta: {
      title: "购买课程"
    }
  },
  {
    path: "/pay",
    name: "pay",
    component: Pay,
    meta: {
      title: "确认支付"
    }
  },
  {
    path: "/payWay",
    name: "payWay",
    component: PayWay,
    meta: {
      title: "确认支付"
    }
  },
  {
    path: "/payResult",
    name: "payResult",
    component: PayResult,
    meta: {
      title: "支付结果"
    }
  },
  {
    path: "/getCash",
    name: "getCash",
    component: GetCash,
    meta: {
      title: "提现"
    }
  },
  {
    path: "/review",
    name: "review",
    component: Review,
    meta: {
      title: "提交审核"
    }
  },
  {
    path: "/taskDetail",
    name: "taskDetail",
    component: TaskDetail,
    meta: {
      title: "任务详情"
    }
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
