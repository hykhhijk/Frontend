import Vue from "vue";
import VueRouter from "vue-router";
import Search from "./views/Search";
import Login from "./views/Login";
import Register from "./views/Register";
import Main from "./views/Main";
import Recycle from "./views/Recycle";




Vue.use(VueRouter);             //검색해볼것

const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/search",component: Search},
        {path:"/users/login",component: Login},
        {path:"/users/new-user",component: Register},
        {path:"/",component: Main},
        {path:"/recycle",component: Recycle},
        


    ]
})


export default router;