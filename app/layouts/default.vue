<script setup lang="ts">
import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";

const updateHeaderHeight = () => {
  const header = document.querySelector("header");
  if (!header) return;

  const height = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--header-height", `${height}px`);
};

onMounted(() => {
  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeaderHeight);
});
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="main">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}
</style>
