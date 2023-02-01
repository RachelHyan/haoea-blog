<template>
	<div class="default-layout"> 
			<layout-sider />
		<div class="default-layout-content">
			<router-view />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LayoutSider } from '@/components'

export default defineComponent({
	name: 'DefaultLayout',
	components: {
		LayoutSider
	},
	setup () {
		

		return {}
	}
})
</script>

<style lang="less">
.default-layout {
	display: flex;
	background: #fff;
	height: 100vh;
	overflow: hidden;

	.default-layout-content {
		flex: 1;
		border-radius: 20px 0 0 20px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1) inset;
		overflow: auto;
		// 隐藏滚动条
		&::-webkit-scrollbar {
			display: none;
		}
	}
}
</style>
