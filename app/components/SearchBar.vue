<template>
  <div class="relative w-full max-w-md">
    <input
      v-model="searchQuery"
      @keyup.enterв="updateSearch"
      type="text"
      :placeholder="$t('mainHeader.search.placeholder')"
      class="p-2 border border-emerald-400 rounded-md focus:outline-none search"
    />
    <Icon
      @click="updateSearch"
      name="uil:search"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-emerald-400"
    />
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['searchData']);
  const searchQuery = ref('');

  function updateSearch() {
    emit('searchData', searchQuery.value);
  }
</script>

<style scoped>
  .search {
    background-color: inherit;
  }
</style>
