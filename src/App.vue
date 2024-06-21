<template>
  <AppLayout>

    <div class="flex flex-col p-5 gap-10" >
      <Introduction/>
      <Buttons/>
    </div>
  </AppLayout>
</template>
<script setup lang="ts">
import AppLayout from "./layouts/AppLayout.vue";
import Introduction from "./components/Introduction.vue";
import Buttons from "./components/Buttons.vue";
</script>