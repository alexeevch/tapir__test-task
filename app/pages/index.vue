<script setup lang="ts">
import AppButton from "~/components/ui/button/AppButton.vue";

const appName = useRuntimeConfig().public.appName;

useSeoMeta({
  title: `Главная страница - ${appName}`
});
</script>

<template>
  <div class="home">
    <section class="home__hero">
      <div class="container">
        <div class="home__hero--content">
          <h1 class="home__hero--title">Тестовое задание</h1>
          <AppButton class="home__hero--btn" to="/catalog">В каталог</AppButton>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.home {
  --header-fallback-height: #{pxToRem(82)};

  &__hero {
    min-height: calc(100dvh - var(--header-height, var(--header-fallback-height)));
    display: flex;
    align-items: center;
    justify-content: center;

    &--content {
      margin-top: calc(-1 * (var(--header-height) / 2));
    }

    &--title {
      text-transform: uppercase;

      @include mixins.fluid-text(64, 26);
    }

    &--btn {
      margin-top: pxToRem(40);
    }
  }
}
</style>
