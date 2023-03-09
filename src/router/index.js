import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue"
import Delivery from "../components/Delivery.vue"
import Sale from "../components/Sale.vue"
import DeliveryTerms from "../components/DeliveryTerms.vue"
import WaresViews from "../views/WaresViews.vue"
import WaresFinihProdViews from "../views/WaresFinihProdViews.vue"
import Basket from "../components/Basket.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/delivery",
      name: "delivery",
      component: Delivery,
    },
    {
      path: "/sale",
      name: "sale",
      component: Sale,
    },
    {
      path: "/deliveryTerms",
      name: "deliveryTerms",
      component: DeliveryTerms,
    },
    {
      path: "/wares",
      name: "wares",
      component: WaresViews,
    },
    {
      path: "/waresFinihProd",
      name: "waresWaresFinihProdViews",
      component: WaresFinihProdViews,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
    
  ],
});

export default router;
