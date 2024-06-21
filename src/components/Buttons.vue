<script setup lang="ts">

import PrimaryButton from "../UI/buttons/solid/PrimaryButton.vue";
import SecondaryButton from "../UI/buttons/solid/SecondaryButton.vue";
import DangerButton from "../UI/buttons/solid/DangerButton.vue";
import {CheckIcon, BanIcon, AlertTriangleIcon,AlertCircleIcon} from "lucide-vue-next";
import SolidWarningButton from "../UI/buttons/solid/SolidWarningButton.vue";
</script>

<template>
  <div class="flex flex-col gap-5">

    <h1 class="text-lg font-semibold">Buttons</h1>
    <div class="flex flex-col md:flex-row flex-wrap gap-5 w-fit">

      <PrimaryButton>
        <CheckIcon  class="h-4 w-4"/>
        Primary
      </PrimaryButton>
      <SecondaryButton>
        <BanIcon class="h-4 w-4"/>
        Secondary
      </SecondaryButton>
      <SolidWarningButton>
        <AlertCircleIcon class="h-4 w-4"/>
        Warning
      </SolidWarningButton>
      <DangerButton>
        <AlertTriangleIcon class="h-4 w-4"/>
        Danger
      </DangerButton>
    </div>
  </div>
</template>

<style scoped>

</style>