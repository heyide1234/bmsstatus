import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//处理重复点击菜单
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/Home",
    name: "Home",

    component: () =>
      import(
        // webpackChunkName:"Home",
        "views/Home.vue"
      ),
    children: [
      {
        path: "/",
        name: "Status",
        redirect: "/Status",
      },
      {
        path: "/Status",
        name: "Status",
        component: () =>
          import(
            // webpackChunkName:"myComp",
            "views/home/status/Status"
          ),
      },
      {
        path: "/Config",
        name: "Config",
        component: () =>
          import(
            // webpackChunkName:"myComp",
            "views/home/config/ConfigList"
          ),
      },
      {
        path: "/About",
        name: "About",
        component: () =>
          import(
            // webpackChunkName:"myComp",
            "views/home/about/About"
          ),
      },
      {
        path: "/Data",
        name: "Data",
        component: () =>
          import(
            // webpackChunkName:"myComp",
            "views/home/data/Data"
          ),
      },
      {
        path: "/Operate",
        name: "Operate",
        component: () =>
          import(
            // webpackChunkName:"myComp",
            "views/home/operate/Operate"
          ),
      },
      {
        path: "/Detail",
        name: "Detail",
        component: () =>
          import(
            // webpackChunkName:"myComp",
            "views/home/detail/Detail"
          ),
      },
      {
        path: "/Retrospect",
        name: "Retrospect",
        component: () =>
          import(
            // webpackChunkName:"myComp",
            "views/home/retrospect/Retrospect"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
