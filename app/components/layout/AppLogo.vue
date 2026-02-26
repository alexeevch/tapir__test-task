<script setup lang="ts">
import LogoPrimaryIcon from "~/assets/icons/logo-primary-icon.svg";
</script>

<template>
  <LogoPrimaryIcon class="logo" />
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.logo {
  font-size: pxToRem(42);
  color: var(--color-red);

  @include mixins.screensFrom("sm") {
    font-size: pxToRem(28);
  }
}
</style>
