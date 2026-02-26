<script setup lang="ts">
import MenuList from "~/components/ui/menu/menu-list.vue";

const { menu } = useAppConfig();
</script>

<template>
  <footer class="footer">
    <div class="container">
      <MenuList :items="menu.footerMenu" />
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.footer {
  background-color: var(--color-black);
  color: var(--color-white);
  padding: pxToRem(100) 0;

  @include mixins.screensFrom("sm") {
    padding: pxToRem(60) 0;
  }
}
</style>
