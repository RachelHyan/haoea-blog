<template>
	<div>
		<vueUse />
		<login />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import vueUse from '@/views/vueUse/index.vue';
import login from '@/views/login/index.vue'

export default defineComponent({
	name: 'Index',
	components: {
		vueUse,
		login
	},
	setup () {
		return {}
	}
})

</script>

<style scoped>

</style>
