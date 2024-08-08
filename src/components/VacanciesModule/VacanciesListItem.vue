<template>
    <RouterLink
        :to="`vacancy/:${vacancy.id}`"
        class="item"
    >
        <span>vacancy</span>

    </RouterLink>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'


defineProps<{
    vacancy: VacancyItem
}>()


</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'

.item
  width: 1119rem
  min-height: 86rem
  padding: 0 32rem
  display: grid
  grid-template-columns: 130rem 270rem 290rem 1fr
  column-gap: 26rem

  font-size: 20rem

  border-radius: 4rem
  border: 1px solid $primary-color
  cursor: pointer
  text-decoration: none

  transition: all 0.3s ease-in-out

  &:hover
    border-color: $primary-color

  & span
    display: inline-block
    align-self: center
    text-align: start


    // &:not(:last-child)
    //   padding-right: 30rem



a:-webkit-any-link
  color: $primary-font-color
</style>
