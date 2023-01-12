<template>
	<div class="default-layout"> 
		<layout-sider />
		<router-view />
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

<style scoped>

</style>
