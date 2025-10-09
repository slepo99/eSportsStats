<template>
  <header
    class="sticky top-0 z-50 text-primary w-full h-16 bg-gray-800 flex items-center px-4 backdrop-blur-md"
  >
    <div class="container mx-auto w-full flex items-center justify-between">
      <div class="flex items-center">
        <NuxtLink to="/">
          <span class="text-xl hover:text-yellow-300">
            {{ `<${$t('projectName')} />` }}
          </span>
        </NuxtLink>
        <div class="ml-10 flex space-x-12">
          <NuxtLink
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
            class="hover:text-yellow-300"
          >
            {{ route.name }}
          </NuxtLink>
        </div>
      </div>
      <div class="flex items-center">
        <HeaderSearchBar @searchData="searchData" />
        <HeaderSettings class="ml-4" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  const { routes } = useMain();

  function searchData(query: string) {
    console.log('Search query:', query);
  }
</script>

<style scoped></style>
