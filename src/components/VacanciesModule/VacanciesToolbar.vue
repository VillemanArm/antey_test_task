<template>
    <div class="toolbar">
        <span>Vacancies toolbar</span>
    </div>
</template>

<script setup lang="ts">
import { useVacanciesStore } from '@/stores/VacanciesStore';
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'




//defineProps<{
//	msg: string;
//}>();

const vacanciesStore = useVacanciesStore()

</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
.toolbar
  display: flex
  margin-bottom: 32rem


.toolbar__download-reports
  height: 52rem
  width: 281rem
  padding: 12rem 14rem
  margin-right: 23rem
  justify-content: center

  background-color: $non-active-color
  border-color: $non-active-color

  &>svg
    width: 24rem
    height: 24rem

  &:hover
    background-color: $active-color
    border-color: $active-color
    color: $white

.toolbar__filter
  display: flex

.toolbar__filter-option

  &:first-child
    border-top-left-radius: 8rem
    border-bottom-left-radius: 8rem

  &:last-child
    border-top-right-radius: 8rem
    border-bottom-right-radius: 8rem
</style>
