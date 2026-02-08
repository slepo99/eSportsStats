<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-white">
    <Header />

    <main class="flex-1">
      <div class="container mx-auto w-full">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
