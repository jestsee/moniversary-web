<script setup lang="ts">
import WishItem from "./WishItem.vue";
import { useWish } from "../composables/@api/useWish";
import { onMounted } from "vue";
import AddWish from "./AddWish.vue";

const { fetchWishes, wishes } = useWish();

onMounted(() => {
  fetchWishes();
});
</script>
<template>
  <div class="w-[1240px] mx-auto py-20 flex gap-x-6">
    <div class="sticky top-24 self-start">
      <AddWish/>
    </div>
    <div class="columns-3 gap-6">
      <template v-for="wish in wishes">
        <WishItem :wish="wish" class="mb-6 break-inside-avoid" />
      </template>
    </div>
  </div>
</template>
