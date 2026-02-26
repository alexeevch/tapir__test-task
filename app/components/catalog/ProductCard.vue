<script setup lang="ts">
import type { ProductDTO } from "~/types/api/product";
import { formatPrice } from "~/utils/formatters";
import FavoriteIcon from "~/assets/icons/favorite-icon.svg";

const { product } = defineProps<{ product: ProductDTO }>();

const price = computed(() => {
  return formatPrice(product.price);
});

const priceSplit = computed(() => {
  const MULTIPLIER = 2;

  return `${formatPrice(Math.floor(product.price / MULTIPLIER))} x ${MULTIPLIER}`;
});
</script>

<template>
  <NuxtLink class="product" to="/">
    <div class="product__picture">
      <button class="product__favorite-btn" :aria-label="`Добавить ${product.name} в избранное`">
        <FavoriteIcon class="product__favorite-btn--icon" />
      </button>
      <picture>
        <img
          loading="lazy"
          :src="product?.image ? product.image : ''"
          :alt="`Фото товара ${product.name}`"
        />
      </picture>
    </div>
    <div class="product__content">
      <div class="product__price">
        <span class="product__price-total">{{ price }}</span>
        <span class="product__price-split">{{ priceSplit }}</span>
      </div>
      <h3 class="product__name">
        {{ product.name }}
      </h3>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.product {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__picture {
    height: pxToRem(180);
    width: 100%;
    position: relative;

    & picture {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    & img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      object-position: center;
    }

    @include mixins.screensFrom("sm") {
      height: pxToRem(94);
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: pxToRem(5);
    margin-top: pxToRem(30);
  }

  &__price {
    display: flex;
    align-items: center;
    gap: pxToRem(10);
    font-weight: 500;

    &-total {
      font-size: pxToRem(24);
    }

    &-split {
      font-size: pxToRem(14);
      background-color: var(--color-black);
      color: var(--color-white);
      padding: 0 pxToRem(4);
    }

    @include mixins.screensFrom("sm") {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  &__name {
    font-size: pxToRem(16);
    font-weight: 400;
  }

  &__favorite-btn {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: pxToRem(10);
    border: none;
    font-size: pxToRem(24);
    z-index: 1;
    background-color: transparent;

    @include mixins.screensFrom("md") {
      font-size: pxToRem(20);
      padding: pxToRem(4);
    }
  }
}
</style>
