import {createRouter, createWebHashHistory } from "vue-router";
import Home from './components/PagBody.vue';
import Login from './components/Login.vue';
import SingUp from './components/SingUp.vue';
import DocumentationApi from "./components/DocumentationApi.vue";
const routes = [
    {   path: '/', 
        component: Home
    },
    {   path: '/Login',
        component: Login
    },
    {   path: '/SingUp',
        component: SingUp,
    },
    {   path: '/DocumentationApi',
        component: DocumentationApi
    }
]

const routerIntro = createRouter({
    history: createWebHashHistory(),
    routes})

export default routerIntro;
  