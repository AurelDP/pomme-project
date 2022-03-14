import { createRouter, createWebHistory } from 'vue-router';
import store from '@/Store/Store';
import { IS_USER_AUTHENTICATE_GETTER } from '@/Store/StoreConstants';

const Login = () =>
    import(/* webpackChunkName: "Login" */ '../components/LoginSection');
const Signup = () => import('../components/SignUpSection');


const routes = [
    { path: '/login', component: Login, meta: { auth: false } },
    { path: '/signup', component: Signup, meta: { auth: false } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (
        'auth' in to.meta &&
        to.meta.auth &&
        !store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]
    ) {
        next('/login');
    } else {
        next();
    }
});

export default router;