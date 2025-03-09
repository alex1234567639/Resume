import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/index.vue"),
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
]

export default createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    }
})
