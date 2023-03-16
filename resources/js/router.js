
import Vue from 'vue'
import VueRouter from "vue-router";
import Welcome from "./views/Welcome";
import login from "./views/auth/Index";
import Catalogue from "./views/catalogue/Catalogue";
import BouteilleCellier from "./views/cellier/BouteilleCellier";

Vue.use(VueRouter);

import Header from "./views/Header";

const routes = [
    {
        path: "/",
        component: Header
    },
    {
        path: "/welcome",
        component: Welcome
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/catalogue",
        component: Catalogue
    },
    {
        path: "/bouteille-cellier",
        component: BouteilleCellier
    }
]

export default new VueRouter({
    mode: "history",
    routes: routes
});
// const router = new VueRouter({
//     mode: 'history',
//     routes,
//   });
  
  //export default router;
