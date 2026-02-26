<script setup lang="ts">
import ProductSection from "~/components/catalog/ProductSection.vue";

const config = useRuntimeConfig().public;

useSeoMeta({
  title: `Каталог - ${config.appName}`
});
</script>

<template>
  <div class="catalog">
    <h1 class="catalog__heading page-heading">Каталог</h1>
    <ProductSection />
  </div>
</template>

<style scoped lang="scss">
.catalog {
  &__heading {
    text-align: center;
  }
}
</style>
