<template>
  <div
    class="text-emerald-400 w-full h-16 bg-gray-800 flex items-center px-4 backdrop-blur-md"
  >
    <NuxtLink to="/">
      <span class="text-xl duration-300 transition hover:text-yellow-300"
        >{{ `<${$t('projectName')} />` }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
