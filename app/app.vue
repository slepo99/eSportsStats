<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-white">
    <NuxtLayout>
      <AppHeader />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
  // const { loadTeams, getTeams } = useApi()

  // const {data, refresh } = await loadTeams()

  // console.log('useFetch', data.value)
  // const data = await getTeams()
</script>
