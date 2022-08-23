<script setup lang="ts">
import { Wish } from "../composables/types/wish";
interface Props {
  wish: Wish;
}
withDefaults(defineProps<Props>(), {});
</script>
<template>
  <div
    class="flex flex-col gap-y-4 rounded-3xl bg-white px-7 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.05)] hover:scale-105"
  >
    <h3 class="text-2xl font-bold">{{ wish.title }}</h3>
    <p class="text-gray-700">
      {{ wish.wish }}
    </p>
    <span
      class="mt-2 w-fit max-w-[180px] self-end overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-black px-4 py-1.5 text-white"
    >
      From {{ wish.from }}
    </span>
  </div>
</template>
