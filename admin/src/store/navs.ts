import { defineStore } from 'pinia';
import router from '@/router';
import { getItem, setItem } from '@/utils/storage';

export const useNavsStore = defineStore({
	id: 'navs',
	state: () => {
		return {
			currentNav: 0,
			navs: [
				{ name: "首页", icon: "icon-shouye",link:"/index" },
				{ name: "文章", icon: "icon-dingdan",link:"/article"},
				{ name: "发布", icon: "icon-pinglun",link:"/release" },
				{ name: "评论", icon: "icon-xiaoxi",link:"/comment" },
				{ name: "用户", icon: "icon-geren",link:"/user" },
			]
		}
	},
	actions: {
		
		activeTab(index: number) {
			this.currentNav = index;
			sessionStorage.setItem('currentNav', this.currentNav.toString());
			router.replace(this.navs[index].link);
		},
		goLogin() {
			this.currentNav = this.navs.length - 1;
			sessionStorage.setItem('currentNav', this.currentNav.toString());
			router.replace('/login');
		}
	},
	// persist: true,
})
