<template>
  <div>
    <CustomDropDown>
      <template #title>huuu</template>
      <template #option="{ close }">
        <div v-for="value in [1, 2, 3, 4, 5]">
          <div @click="closeDropdown(close)">{{ value }}</div>
        </div>
      </template>
    </CustomDropDown>
  </div>
</template>

<script setup lang="ts">
  function closeDropdown(close: () => void) {
    console.log('close');
    close();
  }
</script>

<style scoped></style>
