<script setup lang="ts">
import WishesContent from "./WishesContent.vue";
import { useWish } from "../composables/@api/useWish";
import { watch } from "vue";
import AddWishContainer from "./AddWishContainer.vue";
import AddWish from "./AddWish.vue";

const { fetchWishes, wishes, loadingWish, reload } = useWish();
fetchWishes();

watch(reload, () => {
  fetchWishes();
});

const refreshWishes = () => {
  reload.value++;
};
</script>
<template>
  <div
    v-if="loadingWish"
    class="flex h-[100vh] max-h-[750px] min-h-[720px] flex-col items-center justify-center"
  >
    <p>Loading...</p>
  </div>
  <div v-else class="mx-auto flex w-full gap-x-6 py-10 xl:w-[1240px]">
    <div class="sticky top-24 hidden self-start lg:block">
      <AddWishContainer :reload="refreshWishes" />
    </div>
    <div class="columns-1 gap-6 md:columns-3">
      <WishesContent :items="wishes" :loading="loadingWish" />
    </div>
  </div>
  <div class="fixed right-8 bottom-8 lg:hidden">
    <AddWish :reload="refreshWishes" />
  </div>
</template>
