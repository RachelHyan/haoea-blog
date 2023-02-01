import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'index',
		redirect: { name: 'login' },
		meta: {
			title: '首页'
		},
		component: () => import('@/layout/default-layout.vue'),
		children: [
			{
				path: "login",
				name: "login",
				component: () => import('@/views/login/index.vue'),
				meta: {
					title: '登录'
				}
			},
			{
				path: "index",
				name: "index",
				component: () => import('@/views/index/index.vue'),
				meta: {
					title: '首页'
				}
			},
			{
				path: "user",
				name: "user",
				component: () => import('@/views/user/index.vue'),
				meta: {
					title: '用户'
				}
			},
			{
				path: "article",
				name: "article",
				component: () => import('@/views/article/index.vue'),
				meta: {
					title: '文章'
				}
			},
			{
				path: "release",
				name: "release",
				component: () => import('@/views/release/index.vue'),
				meta: {
					title: '发布'
				}
			},
			{
				path: "comment",
				name: "comment",
				component: () => import('@/views/comment/index.vue'),
				meta: {
					title: '评论'
				}
			},
		]
	},
	
];

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;
