<script setup lang="ts">
interface ButtonProps {
  variant?: "primary" | "outlined";
  isLoading?: boolean;
  disabled?: boolean;
  to?: string;
  external?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  isLoading: false,
  disabled: false,
  to: undefined
});

const attrs = useAttrs();

const tag = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  return "button";
});

const computedProps = computed(() => {
  if (props.to) {
    return {
      to: props.to,
      target: props.external ? "_blank" : undefined,
      rel: props.external ? "noopener noreferrer" : undefined
    };
  }
  return {
    disabled: props.disabled || props.isLoading,
    type: (attrs.type as string) ?? "type"
  };
});
</script>

<template>
  <component
    :is="tag"
    v-bind="{ ...attrs, ...computedProps }"
    class="button"
    :class="[`button--${variant}`, { 'button--loading': isLoading, 'button--disabled': disabled }]"
  >
    <span v-if="isLoading" class="button__loader" aria-hidden="true" />
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use "~/assets/styles/mixins" as mixins;

.button {
  padding: pxToRem(10) pxToRem(24);
  border: none;
  transition: all var(--transition-duration);

  &--primary {
    background-color: var(--color-red);
    color: var(--color-white);
  }

  &--outlined {
    position: relative;
    background-color: transparent;
    color: var(--color-black);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid var(--color-black);
      border-radius: inherit;
      pointer-events: none;
    }
  }

  &:disabled,
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &--loading {
    cursor: wait;
    pointer-events: none;
  }
}
</style>
