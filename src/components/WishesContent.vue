<script setup lang="ts">
import { PlusSmIcon } from "@heroicons/vue/solid";
import WishItem from "./WishItem.vue";
import { useWish } from "../composables/@api/useWish";
import { onMounted } from "vue";

const { fetchWishes, wishes } = useWish();

onMounted(() => {
  fetchWishes();
});
</script>
<template>
  <div class="w-[1240px] mx-auto py-16 flex gap-x-6">
    <div class="">
      <div
        class="bg-white min-w-[300px] max-h-[300px] aspect-square rounded-3xl flex justify-center items-center"
      >
        <button class="bg-black rounded-full h-fit motion-safe:animate-bounce">
          <PlusSmIcon class="text-white h-28" />
        </button>
      </div>
      <h2 class="font-bold text-2xl">let's drop your wish</h2>
    </div>
    <div class="columns-2 gap-6">
      <template v-for="wish in wishes">
        <WishItem :wish="wish" class="mb-6 break-inside-avoid" />
      </template>
    </div>
  </div>
</template>
