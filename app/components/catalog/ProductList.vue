<script setup lang="ts">
import type { ProductDTO } from "~/types/api/product";
import ProductCard from "~/components/catalog/ProductCard.vue";

const { items } = defineProps<{ items: ProductDTO[] }>();
</script>

<template>
  <div class="products">
    <div v-for="(item, key) in items" :key class="products__item">
      <ProductCard :product="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: pxToRem(40);

  @include mixins.screensFrom("xl") {
    grid-template-columns: repeat(3, 1fr);
    gap: pxToRem(30);
  }

  @include mixins.screensFrom("md") {
    grid-template-columns: repeat(2, 1fr);
    gap: pxToRem(20);
  }
}
</style>
