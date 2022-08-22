<script setup lang="ts">
import Header from "./Header.vue";
import WishesView from "./WishesView.vue";
</script>

<template>
  <div id="header" class="bg-white h-[100vh] lg:min-h-[720px] lg:max-h-[750px] flex lg:block">
    <Header />
  </div>
  <div id="wishes" class="bg-gray-100"><WishesView /></div>
</template>
