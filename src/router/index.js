import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/dashboard';
import Tab1 from '@/components/views/tab1';
import Tab2 from '@/components/views/tab2';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard,
            children: [
                {
                    path: '', name: 'tab1', component: Tab1
                },
                {
                    path: 'tab2', name: 'tab2', component: Tab2
                },
            ]
        },
    ],
});

export default router;
