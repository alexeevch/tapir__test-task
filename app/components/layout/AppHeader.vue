<script setup lang="ts">
import AppNavigation from "~/components/layout/AppNavigation.vue";
import AppLogo from "~/components/layout/AppLogo.vue";
import BurgerMenuIcon from "~/assets/icons/burger-menu-icon.svg";

const { menu } = useAppConfig();
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
        <div class="header__navigation">
          <AppNavigation :items="menu.headerMenu" />
        </div>
        <div class="header__actions">
          <button class="header__burger" aria-label="Открыть мобильное меню">
            <BurgerMenuIcon class="header__burger-icon" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.header {
  width: 100%;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: pxToRem(20) 0;

    @include mixins.screensFrom("sm") {
      padding: pxToRem(10) 0;
    }
  }

  &__navigation {
    @include mixins.screensFrom("lg") {
      display: none;
    }
  }

  &__burger {
    --size: #{pxToRem(40)};

    width: var(--size);
    height: var(--size);
    padding: pxToRem(8);
    background-color: var(--color-gray);
    border: none;

    @include mixins.screensTo("lg") {
      @include mixins.hide();
    }

    &-icon {
      font-size: pxToRem(24);
    }
  }
}
</style>
