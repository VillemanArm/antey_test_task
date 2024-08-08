<template>
    <div
        class="item"
        @click="handleItemClick"
    >
        <span>{{vacancy.title}}</span>
        <div class="item__wrapper">
          <span>{{vacancy.salary.value}}</span>
          <span>{{ vacanciesStore.currency }}</span>
          <button 
            type="button"
            @click.stop="handleHideClick"
          >
            Hide
          </button>
        </div>

    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import { useVacanciesStore } from '@/stores/VacanciesStore'
import {useRouter} from 'vue-router'

const props = defineProps<{
    vacancy: VacancyItem
}>()

const vacanciesStore = useVacanciesStore()
const router = useRouter()

const handleHideClick = () => {
  vacanciesStore.hideVacancy(props.vacancy.id)
  
}

const handleItemClick = () => {
  router.push(`vacancy/:${props.vacancy.id}`) 
}
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'

.item
  width: 1200rem
  min-height: 60rem
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

  button
    margin-left: 8rem

    background-color: $primary-color
    border: 1px solid $primary-color
    color: $secondary-font-color

    &:hover
      background-color: transparent
      color: $primary-color

.item__wrapper
  display: flex
  align-items: center
  column-gap: 16rem


a:-webkit-any-link
  color: $primary-font-color
</style>
