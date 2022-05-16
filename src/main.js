import {createApp, h} from 'vue';
import './index.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import HomeComponents from "@/components/HomeCom";
import AboutComponent from "@/components/AboutComp";

const routes = [
    {path:'/',component:HomeComponents},
    {path:'/about',component:AboutComponent},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});
const app  = createApp({
    render: ()=>h(App)
});
app.use(router);
app.mount("#app")