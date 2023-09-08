import {createRouter, createWebHistory} from "vue-router";



const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/admin/main",
        name: "admin",
        component: () => import('@/views/admin/main'),
    },
    {
        path: "/admin/fcp",
        name: "fcp",
        children: [
            {
                path: '/boar',
                name: 'boar',
                component: () => import('@/views/admin/Piggery/boar'),
            },
            {
                path: '/clinic',
                name: 'clinic',
                component: () => import('@/views/admin/Piggery/clinic'),
            },
            {
                path: '/creep',
                name: 'creep',
                component: () => import('@/views/admin/Piggery/creep'),
            },

            {
                path: '/mortality',
                name: 'mortality',
                component: () => import('@/views/admin/Piggery/mortality'),
            },


            {
                path: '/soar',
                name: 'soar',
                component: () => import('@/views/admin/Piggery/soar'),
            },
        ]
    },


    {
        path: "/admin/sales",
        name: "sales",
        component: () => import('@/views/admin/sales'),

    },


    {
        path: "/sign-in",
        name: "Sign-In",
        component: () => import('@/views/SignIn'),
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
});


export default router;
