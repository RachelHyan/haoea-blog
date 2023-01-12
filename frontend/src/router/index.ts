import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		meta: {
			title: '首页',
			keepAlive: true,
			requireAuth: true,
		},
		component: () => import('@/layout/default-layout.vue'),
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '登录',
			keepAlive: true,
			requireAuth: false,
		},
		component: () => import('@/views/login/index.vue'),
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;
