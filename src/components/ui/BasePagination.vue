<!--
  Компонент представляет из себя простую пагинацию с кнопками вперед и назад.
  Принимает свойства:
  maxPages: number
  currentPage: number

  Возвращает событие
  changePage (value: number)
 -->

<template>
    <div class="pagination">
        <div
            id="prev-btn"
            :class="{
                pagination__btn: true,
                'pagination__btn--active': currentPage !== 1,
            }"
            @click="handleChangePage(currentPage - 1)"
        >
            <LeftArrowIcon />
        </div>
        <span class="pagination__info">{{ currentPage }} из {{ maxPages }}</span>
        <div
            id="next-btn"
            :class="{
                pagination__btn: true,
                'pagination__btn--active': currentPage !== maxPages,
            }"
            @click="handleChangePage(currentPage + 1)"
        >
            <RightArrowIcon />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import RightArrowIcon from '../icons/right-arrow-icon.vue'
import LeftArrowIcon from '../icons/left-arrow-icon.vue'

const {maxPages} = defineProps<{
    maxPages: number
    currentPage: number
}>()

const emit = defineEmits(['changePage'])
const handleChangePage = (newPageValue: number) => {
    if (newPageValue >= 1 && newPageValue <= maxPages) {
        emit('changePage', newPageValue)
    }
}
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
.pagination
  display: flex
  align-items: center
  padding: 1rem

  &__btn
    width: 50rem
    height: 50rem

    & svg
      width: 100%
      height: 100%
      object-fit: contain

    &--active
      cursor: pointer

      & svg:hover
        fill: $primary-color

  &__info
    width: 125rem

    text-align: center
</style>
