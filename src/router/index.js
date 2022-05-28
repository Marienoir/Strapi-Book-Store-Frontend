import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/books",
    name: "Book-Store",
    component: () => import("../views/BookView.vue"),
  },
  {
    path: "/book/:id",
    name: "Book-Details",
    component: () => import("../views/BookDetails.vue"),
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
