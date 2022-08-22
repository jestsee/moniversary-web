<script setup lang="ts">
import { useScroll } from "../composables/useScroll";
const { scrollTo, updateScroll, scrollPosition } = useScroll();
</script>
<template>
  <div class="flex flex-col md:flex-row items-center justify-center pt-32">
    <img class="hidden lg:block lg:h-[560px] -m-8 lg:m-0" src="../assets/peep-16.svg" alt="Hbd" />
    <div class="lg:w-[600px] px-10 lg:px-0 flex flex-col gap-y-7">
      <h1 class="text-6xl lg:text-8xl font-extrabold leading-[1.15] -mt-16 lg:mt-0">Happy Moniversary!</h1>
      <p class="font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        dignissimos nesciunt, magnam illum deserunt eaque expedita saepe
        laudantium repellat culpa, tempore alias omnis adipisci in, quia maiores
        nulla et voluptate.
      </p>
      <button
        @click="scrollTo('wishes')"
        class="bg-black text-white font-semibold max-w-fit py-3 px-6 rounded-full hover:underline underline-offset-4 hover:scale-110"
      >
        Get Started
      </button>
    </div>
  </div>
</template>
