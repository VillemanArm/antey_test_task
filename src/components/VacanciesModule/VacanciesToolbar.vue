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



</style>
