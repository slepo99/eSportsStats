<template>
  <button :class="props.title?.length ? `btn` : `btn-icon`" class="flex items-center bg-transparent">
    <span v-if="props.title?.length">{{ props.title }}</span>
    <slot name="icon"></slot>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title?: string;
  }>();
</script>

<style scoped>
  .btn {
    border-radius: 8px;
    padding: 2px 4px;
    gap: 6px;
  }
  .btn-icon {
    border-radius: 50%;
    padding: 8px;
  }
  button {
    transition: all 0.3s ease;
  }
  button:hover {
    background-color: #374151;
  }
</style>
