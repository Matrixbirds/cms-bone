import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/pages/dashboard';
import Tab1 from '@/pages/tab1';
import Tab2 from '@/pages/tab2';
import Tab3 from '@/pages/tab3';
import NotFound from '@/components/not-found';
import iView from 'iview';

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
                {
                    path: 'tab3', name: 'tab3', component: Tab3
                },
            ]
        },
        {
            path: '*',
            name: 'not_found',
            component: NotFound,
        }
    ],
});

iView.LoadingBar.config({
	color: '#5cb85c',
	failedColor: '#b91f1f',
	height: 2,
});

router.beforeEach( (to, from, next) => {
	iView.LoadingBar.start();
	next();
});

router.afterEach( (to, from, next) => {
	iView.LoadingBar.finish();
	iView.Notice.open({
		title: `${to.path}`,
		desc: '消息'
	});
});

export default router;
