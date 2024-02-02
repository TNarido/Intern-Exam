import { createRouter, createWebHistory } from "vue-router";
import Error from "./components/Error.vue";
import Login from './components/Pages/Login/Login.vue'
import Register from './components/Pages/Register/Register.vue'
import Home from './components/Pages/Home/Home.vue'

const routes = [
    {
        path: '/auth',
        component: () => import('./components/Auth.vue'),
        children: [
            {
                path: '/',
                component: Login,
            },
            {
                path: '/register',
                component: Register,
            }
        ]
    },
    {
        path: '/app',
        component: () => import('./components/App.vue'),
        children: [
            {
                path: '/home',
                component: Home,
            },
        ]
    },
    {
        path: '/:every(.*)*',
        component: Error,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router