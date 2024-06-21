<script setup lang="ts">

import PrimaryButton from "../UI/buttons/PrimaryButton.vue";
import SecondaryButton from "../UI/buttons/SecondaryButton.vue";
import DangerButton from "../UI/buttons/DangerButton.vue";
import {CheckIcon,BanIcon,AlertTriangleIcon} from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col gap-5">

    <h1 class="text-lg font-semibold">Buttons</h1>
    <div class="flex flex-col md:flex-row gap-5 w-fit">

      <PrimaryButton>
        <CheckIcon class="h-4 w-4"/>
        Primary Button
      </PrimaryButton>
      <SecondaryButton>
        <BanIcon class="h-4 w-4"/>
        Secondary Button</SecondaryButton>
      <DangerButton>
        <AlertTriangleIcon class="h-4 w-4"/>
        Danger Button</DangerButton>
    </div>
  </div>
</template>

<style scoped>

</style>