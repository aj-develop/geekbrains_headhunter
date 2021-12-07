import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@views/Home.vue')
    },
    {
        path: '/vacancies_list',
        name: 'VacansiesList',
        component: () => import('@views/VacanciesList.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@views/Profile.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@views/Settings.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@views/AboutCompany.vue')
    },
    {
        path: '/vacancy/:id?',
        name: 'Vacancy',
        component: () => import('@views/Vacancy.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
