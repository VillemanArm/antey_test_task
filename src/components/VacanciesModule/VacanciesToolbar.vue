<template>
    <div class="toolbar">
        <input 
          type="text" 
          v-model.trim="vacanciesStore.searchQuery"
          placeholder="Search"
          class="toolbar__search-input"
        />
        <div class="toolbar__wrapper">
          <span>Currency:</span>
          <select 
            class="toolbar__select"
            v-model="vacanciesStore.selectedCurrency"
          >
            <option 
              v-for="currency in vacanciesStore.currencies" 
              :value="currency" 
              :key="currency"
            >
              {{ currency }}
            </option>
          </select>
          <span>Salary size:</span>
          <span>from</span>
          <input 
            class="toolbar__number-input" 
            type="number"
            @change="handleSalaryFromInput($event)"
          >
          <span>to</span>
          <input
            class="toolbar__number-input" 
            type="number"
            :value="vacanciesStore.salaryTo !== Infinity ? vacanciesStore.salaryTo : ''"
            @change="handleSalaryToInput($event)"
          >
          <span>Sort by salary:</span>
          <select 
            class="toolbar__select"
            v-model="vacanciesStore.isSortDescending"
          >
            <option :value="'noSort'" ></option>
            <option :value="true" >descending</option>
            <option :value="false" >ascending</option>
          </select>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useVacanciesStore } from '@/stores/VacanciesStore';
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'


//defineProps<{
//	msg: string;
//}>();

const vacanciesStore = useVacanciesStore()

const handleSalaryFromInput = (event: Event) => {
    vacanciesStore.setSalaryFrom(event)
}

const handleSalaryToInput = (event: Event) => {
    vacanciesStore.setSalaryTo(event)
}
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
.toolbar
  display: flex
  margin-bottom: 32rem
  align-items: center
  justify-content: space-between

  input
    height: 28rem
    
.toolbar__select
  height: 28rem

  border-radius: 4rem

.toolbar__search-input
  width: 320rem
  padding: 0 8rem

.toolbar__number-input
  width: 100rem
  padding: 0 8rem

.toolbar__wrapper
  display: flex
  align-items: center
  gap: 16rem

</style>
