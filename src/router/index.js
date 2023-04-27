import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'Home-component',
        component: () => import("../views/HomeView.vue")
    },
    {
        path: '/contact',
        name: 'Contact-component',
        component: () => import("../views/ContactView.vue")
    },
    {
        path: '/news',
        name: 'News-component',
        component: () => import("../views/NewsView.vue")
    },
    {
        path: '/about',
        name: 'About-component',
        component: () => import("../views/AboutView.vue")
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
