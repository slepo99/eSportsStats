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
      class="burger-menu"
    >
      <div class="hover:text-yellow-300 cursor-pointer">Profile</div>
      <div class="hover:text-yellow-300 cursor-pointer">Language</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { useClickOutside } = useCustomHelpers();

  const isOpen = ref(false);
  const menuRef = ref<HTMLElement | null>(null);
  const buttonRef = ref<HTMLElement | null>(null);
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
    flex-direction: column;
    min-width: 200px;
    position: absolute;
    padding: 6px;
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
