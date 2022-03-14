import {createWebHistory, createRouter} from 'vue-router'
import MainPage from '../components/mainPage/MainPage.vue'
import CartPage from '../components/cartPage/CartPage.vue'
import Error404 from '../components/ErrorPage404.vue'

const routes = [
    {path: '/mainpage', alias: '/', name: "Mainpage", component: MainPage},
    {path: '/cartpage', name: "Shopping cart", component: CartPage},
    {path: "/:catchAll(.*)*", component: Error404},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            if (to.hash) {
                return {
                    el: to.hash,
                }
            }
        }
    }
})

export default router;