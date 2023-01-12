<template>
	<div>
		<h1>测试 vueUse 的鼠标坐标</h1>
		<div>
			鼠标坐标：{{ x }}, {{ y }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMouse } from '@vueuse/core'

export default defineComponent({
	name: 'VueUse',
	setup () {
		const { x, y } = useMouse()

		return {
			x,
			y
		}
	}
})
</script>

<style scoped>

</style>
