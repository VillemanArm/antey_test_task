<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'

defineProps<{
	msg: string;
}>();

</script>

<template>

	<div class="">
		<h1>{{ msg }}</h1>
	</div>

</template>

<style scoped lang="sass">
	@import '@/assets/styles/constants.sass'

</style>





