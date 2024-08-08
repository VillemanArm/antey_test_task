<template>
    <div class="list">
        <VacanciesToolbar />
        <div class="list__items">
            <VacanciesListItem
                v-for="vacancy in vacanciesStore.vacancyItems.slice(
                    displayedItemsFrom,
                    displayedItemsTo
                )"
                :vacancy="vacancy"
                :key="vacancy.id"
            />
        </div>

        <BasePagination
            v-if="maxPages > 1"
            :maxPages="maxPages"
            :currentPage="currentPage"
            @changePage="(value) => setCurrentPage(value)"
            class="list__pagination"
        />
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import VacanciesToolbar from './VacanciesToolbar.vue'
import VacanciesListItem from './VacanciesListItem.vue'
import BasePagination from '../ui/BasePagination.vue'

import { useVacanciesStore } from '@/stores/VacanciesStore'


// //defineProps<{
// //	msg: string;
// //}>();

const vacanciesStore = useVacanciesStore()

const currentPage = ref<number>(1)
const itemsByPage = ref<number>(7)
const maxPages = computed(() =>
    Math.ceil(vacanciesStore.vacancyItems.length / itemsByPage.value)
)
const displayedItemsFrom = computed(
    () => (currentPage.value - 1) * itemsByPage.value
)
const displayedItemsTo = computed(
    () => displayedItemsFrom.value + itemsByPage.value
)
const setCurrentPage = (newValue: number) => {
    currentPage.value = newValue
}

onMounted(() => {
    vacanciesStore.getVacanciesList()
})
</script>

<style scoped lang="sass">
.list
  width: 1209rem
  padding: 32rem 45rem 0 45rem

  text-align: center

.list__toolbar
  display: flex
  margin-bottom: 44rem

.list__items
  min-height: 700rem
  margin-bottom: 32rem
  display: grid
  gap: 16rem
  align-content: start

.list__pagination
  margin-bottom: 32rem
  float: right
</style>
