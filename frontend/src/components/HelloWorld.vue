<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
userStore.updateName('Hello World');

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
	<div>{{ userStore.name }}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
