<script setup lang="ts">

import Header from "../components/Header.vue";
</script>

<template>

  <main class="bg-neutral-200 min-h-screen text-neutral-800 font-medium font-jetbrains">
    <Header/>
    <div class="max-w-4xl mx-auto">


      <slot/>
    </div>
  </main>
</template>

<style scoped>

</style>