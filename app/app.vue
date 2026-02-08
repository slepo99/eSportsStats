<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { loadTeams } = useTeamsFetch();
  const { data: teams, pending, error, refresh } = loadTeams();
  console.log(
    teams.value?.find((team) => team.name.toLowerCase().includes('natus')),
  );
</script>
