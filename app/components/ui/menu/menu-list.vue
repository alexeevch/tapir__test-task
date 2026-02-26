<script setup lang="ts">
import type { AppMenuItem } from "~/types/app/layout";

const { items } = defineProps<{ items: AppMenuItem[] }>();
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list navigation__list--root">
      <li v-for="(item, key) in items" :key>
        <span class="navigation__list-item navigation__list-item--root">{{ item.label }}</span>
        <ul v-if="item.items" class="navigation__list navigation__list--child">
          <li v-for="(childItem, childKey) in item.items" :key="childKey">
            <NuxtLink
              class="navigation__list-item navigation__list-item--child"
              :to="childItem.to"
              >{{ childItem.label }}</NuxtLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.navigation {
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;

    &--root {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: pxToRem(20);

      @include mixins.screensFrom("xl") {
        row-gap: pxToRem(60);
        column-gap: pxToRem(20);
        grid-template-columns: repeat(3, 1fr);
      }

      @include mixins.screensFrom("md") {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mixins.screensFrom("sm") {
        grid-template-columns: 1fr;
      }
    }

    &--child {
      margin-top: pxToRem(14);
      display: flex;
      flex-direction: column;
      gap: pxToRem(14);
    }
  }

  &__list-item {
    display: inline-block;
    transition: color var(--transition-duration, 0.2s);

    &--root {
      color: var(--color-dark, #6b6b6b);
    }

    &--child {
      color: var(--color-white, #ffffff);

      @include mixins.hover() {
        color: var(--color-red);
      }
    }
  }
}
</style>
