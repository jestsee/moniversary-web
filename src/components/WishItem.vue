<script setup lang="ts">
import { Wish } from '../composables/types/wish';
interface Props {
  wish: Wish
}
withDefaults(defineProps<Props>(),{})
</script>
<template>
  <div class="bg-white px-7 py-8 rounded-3xl flex flex-col gap-y-4 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.05)] hover:scale-105">
    <h3 class="font-bold text-2xl">{{ wish.title }}</h3>
    <p class="text-gray-700">
      {{ wish.wish }}
    </p>
    <div class="bg-black text-white w-fit px-4 py-1.5 rounded-full mt-2 self-end">From {{ wish.from }}</div>
  </div>
</template>
