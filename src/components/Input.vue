<script setup lang="ts">
import { Err } from "../composables/types/wish";
interface Props {
  label?: string;
  placeholder?: string;
  error?: Err;
  textArea?: boolean;
}
withDefaults(defineProps<Props>(), { textArea: false });
</script>
<template>
  <div class="">
    <p class="text-sm text-gray-500 mb-1 capitalize">{{ label }}</p>
    <textarea
      v-if="textArea"
      :class="[
        'w-full border-2 rounded-lg py-2 px-3 outline-none',
        { 'border-red-700': error?.state },
      ]"
      :placeholder="placeholder"
    ></textarea>
    <input
      v-else
      :class="[
        'w-full border-2 rounded-lg py-2 px-3 outline-none',
        { 'border-red-700': error?.state },
      ]"
      :placeholder="placeholder"
    />
    <p class="text-red-700 text-sm">{{ error?.message }}</p>
  </div>
</template>
