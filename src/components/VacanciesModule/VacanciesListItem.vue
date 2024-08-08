<template>
    <RouterLink
        :to="`vacancy/:${vacancy.id}`"
        class="item"
    >
        <span>{{vacancy.title}}</span>
        <div class="item__wrapper">
          <span>{{vacancy.salary.value}}</span>
          <button type="button">Hide</button>
        </div>

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
  width: 1200rem
  min-height: 64rem
  padding: 0 32rem
  display: flex
  justify-content: space-between
  column-gap: 32rem

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

.item__wrapper
  display: flex
  align-items: center
  column-gap: 16rem


a:-webkit-any-link
  color: $primary-font-color
</style>
