<script setup lang="ts">
import { PlusSmIcon } from "@heroicons/vue/solid";
import WishItem from "./WishItem.vue";
</script>
<template>
  <div class="w-[1240px] mx-auto grid grid-cols-3 gap-8 py-16">
    <div class="bg-white w-full aspect-square rounded-3xl flex justify-center items-center">
      <button class="bg-black rounded-full h-fit">
        <PlusSmIcon class="text-white h-28" />
      </button>
    </div>
    <WishItem/>
  </div>
</template>
