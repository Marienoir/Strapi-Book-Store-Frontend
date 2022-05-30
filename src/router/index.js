import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "BookStore",
    component: () => import("../views/BookView.vue"),
  },
  {
    path: "/book/:id",
    name: "BookDetails",
    component: () => import("../views/BookDetails.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
