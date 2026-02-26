<script setup lang="ts">
import type { AppMenuItem } from "~/types/app/layout";

const { items } = defineProps<{ items: AppMenuItem[] }>();
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li v-for="(item, key) in items" :key class="navigation__item">
        <NuxtLink class="navigation__item-link" :to="item.to">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.navigation {
  width: fit-content;
  background-color: var(--color-gray);

  &__list {
    display: flex;
  }

  &__item-link {
    display: block;
    padding: pxToRem(10) pxToRem(24);
    transition: color var(--transition-duration);

    @include mixins.hover() {
      color: var(--color-red);
    }
  }
}
</style>
