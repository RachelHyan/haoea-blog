import { defineStore } from 'pinia';
import { getItem, setItem } from '@/utils/storage';

const TOKEN_KEY = 'token';

export const useUserStore = defineStore({
	id: 'user', // 必填，唯一标识
	state: () => {
		return {
			user:{},
			token: getItem(TOKEN_KEY),
		}
	},
	actions: {
		setToken(data:any) {
			this.token = data;
			setItem(TOKEN_KEY, this.token);
		}
	}
})
