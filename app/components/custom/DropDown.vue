<template>
  <div
    ref="root"
    class="relative"
    :style="{ height: height + 24 + 'px' }"
  >
    <div @click.stop="toggle">
      <slot
        name="title"
        :open="open"
      />
    </div>
    <div
      ref="dropdown"
      class="dropdown absolute overflow-hidden"
      :style="{ maxHeight: height + 'px' }"
    >
      <slot
        name="option"
        :close="close"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const root = ref<HTMLElement | null>(null);
  const open = ref(false);
  const dropdown = ref<HTMLElement | null>(null);
  const height = ref(0);

  function toggle() {
    open.value = !open.value;
  }
  function close() {
    open.value = false;
  }

  const onClickOutside = (e: MouseEvent) => {
    if (root.value && !root.value.contains(e.target as Node)) {
      close();
    }
  };

  watch(open, async (value) => {
    if (!dropdown.value) return;

    if (value) {
      height.value = 0;
      await nextTick();

      requestAnimationFrame(() => {
        height.value = dropdown.value!.scrollHeight;
      });
    } else {
      height.value = 0;
    }
  });

  onMounted(() => {
    document.addEventListener('click', onClickOutside);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside);
  });
</script>

<style scoped>
  .dropdown {
    overflow: hidden;
    transition: max-height 300ms ease;
  }
</style>
