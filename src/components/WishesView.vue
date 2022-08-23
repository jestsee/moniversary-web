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
}
</script>
<template>
  <div
    v-if="loadingWish"
    class="flex flex-col items-center justify-center h-[100vh] min-h-[720px] max-h-[750px]"
  >
    <p>Loading...</p>
  </div>
  <div v-else class="w-full xl:w-[1240px] mx-auto py-10 flex gap-x-6">
    <div class="sticky top-24 self-start hidden lg:block">
      <AddWishContainer :reload="refreshWishes"/>
    </div>
    <div class="columns-1 md:columns-3 gap-6">
      <WishesContent :items="wishes" :loading="loadingWish" />
    </div>
    <div class="fixed right-8 bottom-8 lg:hidden"><AddWish :reload="refreshWishes"/></div>
  </div>
</template>
