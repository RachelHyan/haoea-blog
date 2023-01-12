<template>
	<div>
		1
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import API from '@/api'

export default defineComponent({
	name: 'Login',
	setup () {
		const register = async () => {
			const {data} = await API.register('admin', 'admin123')
			console.log(data)
		}

		const login = async () => {
			const {data} = await API.login('admin', 'admin123')
			console.log(data)
		}

		register()
		login()

		return {}
	}
})
</script>

<style scoped>

</style>
