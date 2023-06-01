import { createRouter, createWebHistory } from "vue-router";
import CreatePage from "../components/Create/CreatePage.vue";
import LivePage from "../components/Live/LivePage.vue";
import ManagerPage from "../components/Manager/ManagerPage.vue";
import DraftPage from "../components/Draft/DraftPage.vue";

const routes = [
  {
    path: "/",
    name: "CreatePage",
    component: CreatePage,
  },
  {
    path: "/LivePage",
    name: "LivePage",
    component: LivePage,
  },
  {
    path: "/ManagerPage",
    name: "ManagerPage",
    component: ManagerPage,
  },
  {
    path: "/DraftPage",
    name: "DraftPage",
    component: DraftPage,
  },
 
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
