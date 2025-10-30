<template>
  <div class="relative">
    <CustomBtn
      @click.stop="isOpen = !isOpen"
      ref="buttonRef"
    >
      <template v-slot:icon>
        <Icon
          name="mdi:settings"
          size="24px"
        />
      </template>
    </CustomBtn>
    <div
      ref="menuRef"
      v-show="isOpen"
      class="burger-menu flex-col absolute p-2"
    >
      <div class="hover:text-yellow-300 cursor-pointer">Profile</div>
      <div
        class="hover:text-yellow-300 cursor-pointer flex justify-between items-center"
      >
        <span>Language</span>
        <Icon name="mdi:chevron-down" />

        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { useClickOutside } = useCustomHelpers();

  const isOpen = ref(false);
  const menuRef = ref<HTMLElement | null>(null);
  const buttonRef = ref<HTMLElement | null>(null);
  const { availableLocales } = useHeader();

  const switchLocalePath = useSwitchLocalePath();
  useClickOutside(
    menuRef,
    () => {
      isOpen.value = false;
    },
    buttonRef,
  );
</script>

<style scoped>
  .burger-menu {
    min-width: 120px;
    top: 50px;
    right: 0;
    background-color: #1f2937;
    border: 1px solid #374151;
    border-radius: 0.375rem;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    z-index: 1000;
  }
</style>
