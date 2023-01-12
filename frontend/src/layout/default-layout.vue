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

	.default-layout-content {
		flex: 1;
		background: #000;
		border-radius: 20px 0 0 20px;
	}
}
</style>
