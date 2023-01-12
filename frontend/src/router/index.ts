import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		redirect: { name: 'login' },
		meta: {
			title: '首页',
			keepAlive: true,
			requireAuth: true,
		},
		component: () => import('@/layout/default-layout.vue'),
		children: [
			{
				path: "login",
				name: "login",
				component: () => import('@/views/login/index.vue'),
				meta: {
					title: '登录',
					keepAlive: true,
					requireAuth: false,
				}
			}
		]
	},
	
];

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;
