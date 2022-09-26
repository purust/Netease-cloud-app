import { createRouter, createWebHistory } from "vue-router";

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
    meta: {
      showNav: true,
    },
  },
  {
    path: "/login/phone",
    component: () => import("views/Login/LoginByPhone.vue"),
    meta: { showNav: true },
  },
  {
    path: "/login/sendcode",
    component: () => import("views/Login/VerCode.vue"),
    meta: { showNav: true },
  },
  {
    path: "/me",
    name: "me",
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem("isLogin") == "true") {
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
