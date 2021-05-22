import Vue from "vue";
import VueRouter from "vue-router";
import Search from "./views/Search";
import Login from "./views/Login";
import Register from "./views/Register";
import Main from "./views/Main";
import Recycle from "./views/Recycle";
import Community from "./views/Community";




Vue.use(VueRouter);             //검색해볼것

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/search",component: Search},
        {path:"/users/login",component: Login},
        {path:"/users/new-user",component: Register},
        {path:"/",component: Main},
        {path:"/users/recycle",component: Recycle},
        {path:"/community",component: Community},


    ]
})


export default router;