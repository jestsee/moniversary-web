<script setup lang="ts">
import WishItem from "./WishItem.vue";
import { Wish } from "../composables/types/wish";

interface Props {
  items: Wish[];
  loading: boolean;
}
const props = withDefaults(defineProps<Props>(), {});
</script>
<template>
  <template v-for="wish in items">
    <WishItem :wish="wish" class="mb-6 break-inside-avoid" />
  </template>
</template>
