<script setup lang="ts">
import { ref, onMounted } from "vue";

const scrollPosition = ref(0);
const updateScroll = () => {
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>
<template>
  <div
    :class="[
      'flex justify-center fixed w-full z-10',
      {
        ' bg-black text-white transition-all duration-150':
          scrollPosition > 100,
      },
    ]"
  >
    <div
      :class="[
        'flex justify-between w-[1240px] py-8',
        { 'py-4 transition-all duration-700': scrollPosition > 100 },
      ]"
    >
      <div class="font-extrabold text-3xl">Hbd y.</div>
      <ul class="flex gap-x-[6.5rem] items-center">
        <li
          class="font-semibold text-lg hover:underline underline-offset-4 cursor-pointer"
        >
          Home
        </li>
        <li
          class="font-semibold text-lg hover:underline underline-offset-4 cursor-pointer"
        >
          Wishes
        </li>
        <li
          class="font-semibold text-lg hover:underline underline-offset-4 cursor-pointer"
        >
          Outro
        </li>
      </ul>
      <button
        class="bg-black text-white text-lg font-semibold py-1.5 px-6 rounded-full border-white border-2"
      >
        Bonus
      </button>
    </div>
  </div>
</template>
