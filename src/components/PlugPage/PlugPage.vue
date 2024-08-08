<template>
    <div class="plug">
        <span>Page in development</span>
    </div>
</template>

<script setup lang='ts'>
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute} from 'vue-router'

// defineProps<{
//     msg?: string;
// }>();

</script>

<style scoped lang='sass'>
    @import '@/assets/styles/constants.sass'

    .plug
        height: 100vh
        display: flex
        justify-content: center
        align-items: center

        font-size: 24rem

</style>
