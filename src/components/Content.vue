<script setup lang="ts">
import Header from "./Header.vue";
import WishesView from "./WishesView.vue";
</script>

<template>
  <div id="header" class="bg-white h-[100vh] min-h-[720px] max-h-[750px]">
    <Header />
  </div>
  <div id="wishes" class="bg-gray-100"><WishesView /></div>
</template>
