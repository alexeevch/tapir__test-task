<script setup lang="ts">
import ProductList from "~/components/catalog/ProductList.vue";
import type { ProductCollectionDTO, ProductDTO } from "~/types/api/product";
import AppButton from "~/components/ui/button/AppButton.vue";
import type { ApiPaginatorQueryDTO } from "~/types/api/shared";

const baseURL = useRuntimeConfig().public.apiUrl;

const products = ref<ProductDTO[]>([]);
const currentPage = ref(1);
const hasMore = ref(true);
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);

const buttonText = computed(() => {
  if (isLoading.value) {
    return "Загрузка...";
  }

  if (errorMessage.value) {
    return "Повторить";
  }

  return "Показать еще";
});

async function fetchProducts(query?: ApiPaginatorQueryDTO): Promise<ProductCollectionDTO> {
  return $fetch<ProductCollectionDTO>("/products", {
    baseURL,
    query: {
      page: query?.page || 1,
      limit: query?.limit || 12
    }
  });
}

const { data: initialData } = await useAsyncData("products", () => fetchProducts());

if (initialData.value) {
  products.value = initialData.value.products;
  hasMore.value = initialData.value.currentPage < initialData.value.totalPages;
}

/*
Конечно, на проде я такое не использовал бы.
Я бы вынес логику загрузки данных в pinia store, там же обработал бы ошибки и состояние.
Функция загрузки данных, по-хорошему, не должна ничего делать, кроме загрузки данных.

В реальности, я бы дернул ручку из стора внутри useAsyncData и отрисовал товары из хранилища
без костылей с initialData и прочего.
 */
const loadMoreProducts = async () => {
  if (isLoading.value || !hasMore.value) return;

  try {
    isLoading.value = true;
    currentPage.value++;

    const response = await fetchProducts({ page: currentPage.value });

    products.value = [...products.value, ...response.products];
    hasMore.value = response.currentPage < response.totalPages;
    errorMessage.value = null;
  } catch (e) {
    console.error(e);
    currentPage.value--;
    errorMessage.value = "Произошла ошибка, попробуйте позже";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <section class="products-section">
    <div class="container">
      <ProductList class="products-section__items" :items="products" />

      <p v-if="errorMessage" class="products-section__error">{{ errorMessage }}</p>

      <div v-if="hasMore" class="products-section__actions">
        <AppButton
          class="products-section__btn-load"
          variant="outlined"
          :disabled="isLoading"
          @click="loadMoreProducts"
        >
          {{ buttonText }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.products-section {
  &__items {
    padding-bottom: pxToRem(110);
  }

  &__actions {
    padding: 0 0 pxToRem(100) 0;
    text-align: center;
  }

  &__error {
    text-align: center;
    padding-bottom: pxToRem(30);
  }
}
</style>
