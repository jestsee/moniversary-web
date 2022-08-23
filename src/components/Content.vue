<script setup lang="ts">
import Header from "./Header.vue";
import WishesView from "./WishesView.vue";
</script>

<template>
  <div id="header" class="mx-10 flex h-[100vh] bg-white pt-32 mr-16 lg:block">
    <Header />
  </div>
  <div id="wishes" class="bg-gray-100 px-10 pt-16 lg:pt-20"><WishesView /></div>
</template>
