<template>
    <div class="toolbar">
        <span>Vacancies toolbar</span>
        <select 
          class="toolbar__currency-select"
          v-model="vacanciesStore.selectedCurrency"
        >
          <option v-for="currency in vacanciesStore.currencies" :value="currency" :key="currency">{{ currency }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { useVacanciesStore } from '@/stores/VacanciesStore';
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'


//defineProps<{
//	msg: string;
//}>();

const vacanciesStore = useVacanciesStore()

const handleCurrencyChange = (currency: CurrencyNames)  => {
  vacanciesStore.selectedCurrency = currency
  
}
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
.toolbar
  display: flex
  margin-bottom: 32rem



</style>
