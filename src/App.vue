<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NewComponent from './components/NewComponent.vue'
</script>

<template>
  <NewComponent msg="You did it!" />

</template>

<style scoped lang="sass">
  @import '@/assets/styles/constants.sass'

</style>
