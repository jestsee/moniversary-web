<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useScroll } from "../composables/useScroll";
import { MenuIcon } from "@heroicons/vue/solid";

const { scrollTo, updateScroll, scrollPosition } = useScroll();
const menuClicked = ref(false);
const handleMenu = () => {
  console.log(menuClicked.value);
  menuClicked.value = !menuClicked.value;
};
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>
<template>
  <div
    :class="[
      'flex justify-center fixed w-full z-20',
      {
        ' bg-black text-white transition-all duration-150':
          scrollPosition > 100,
      },
    ]"
  >
    <div
      :class="[
        'w-full flex flex-col justify-between xl:w-[1240px] xl:px-0 py-8 transition-all duration-500 md:flex-row',
        { 'py-4 transition-all duration-700': scrollPosition > 100 },
      ]"
    >
      <div class="flex justify-between items-center px-10 xl:px-0">
        <div class="font-extrabold text-3xl cursor-pointer">Cie tua.</div>
        <button @click="handleMenu">
          <MenuIcon class="h-7 md:hidden" />
        </button>
      </div>
      <ul
        :class="[
          'flex flex-col gap-x-[6.5rem] items-center gap-y-2 md:flex-row absolute md:relative md:top-0 w-full md:w-fit pb-6 md:pb-0 bg-white md:bg-transparent -z-20',
          menuClicked
            ? 'top-[4rem] pb-4 pt-2 transition-all md:duration-150 duration-700'
            : '-top-[150px] transition-all md:duration-150 duration-700',
          { ' bg-black md:bg-transparent': scrollPosition > 100 },
        ]"
      >
        <li
          @click="scrollTo('header')"
          class="font-semibold text-lg hover:underline underline-offset-4 cursor-pointer"
        >
          Home
        </li>
        <li
          @click="scrollTo('wishes')"
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
        class="bg-black text-white text-lg font-semibold py-1.5 px-6 rounded-full border-white border-2 w-fit self-center mt-2 mr-10 hidden md:block xl:mr-0"
      >
        Bonus
      </button>
    </div>
  </div>
</template>
