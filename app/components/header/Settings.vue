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
      <CustomDropDown>
        <template #title="{ open }">
          <div class="hover:text-yellow-300 cursor-pointer flex items-center">
            <span>Language</span>
            <Icon :name="open ? 'mdi:chevron-up' : 'mdi:chevron-down'" />
          </div>
        </template>
        <template #option="{ close }">
          <div class="ml-2 ">
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              @click="closeDropdown(close)"
              class="flex-col flex"
            >
              <span class="hover:text-yellow-300">{{ locale.name }}</span>
            </NuxtLink>
          </div>
        </template>
      </CustomDropDown>
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
  function closeDropdown(close: () => void) {
    console.log('close');
    close();
  }
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
    max-height: 600px;
    transition: height 300ms ease;
    overflow: hidden;
  }
</style>
