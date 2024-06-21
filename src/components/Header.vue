<script setup lang="ts">

import PrimaryButton from "../UI/buttons/solid/PrimaryButton.vue";
import {GithubIcon} from 'lucide-vue-next'
</script>

<template>
  <header class="max-w-4xl mx-auto p-5">
    <nav class="flex justify-between items-center">


      <img src="/spider.png" alt="logo" class="w-10"/>
      <PrimaryButton>
        <GithubIcon class="w-5 h-5"/>
        View on GitHub
      </PrimaryButton>
    </nav>
  </header>

</template>

<style scoped>

</style>