import { createRouter, createWebHistory } from "vue-router";
import store from "store/index.js";
// import Home from "views/Home/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("views/Home/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("views/List/List.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("views/Search/Search.vue"),
  },
  {
    path: "/searchresult",
    name: "searchresult",
    component: () => import("views/Search/SearchResult.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("views/Login/Login.vue"),
    // children: [
    //   {
    //     path: "cellphone",
    //     component: () => import("views/Login/LoginByPhone.vue"),
    //   },
    // ],
  },
  {
    path: "/login/cellphone",
    component: () => import("views/Login/LoginByPhone.vue"),
  },
  {
    path: "/me",
    name: "me",
    beforeEnter: (to, from, next) => {
      if (store.state.user.isLogin) {
        next();
      } else {
        next({ path: "/login" });
      }
    },
    component: () => import("views/Me/Me.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
