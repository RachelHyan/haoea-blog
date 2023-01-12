import { defineStore } from 'pinia';

export const useUserStore = defineStore({
	id: 'user', // 必填，唯一标识
	state: () => {
		return {
			name: 'user',
		}
	},
	actions: {
		updateName(name: string) {
			this.name = name;
		}
	}
})
