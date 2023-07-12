<script setup lang="ts">
defineProps<{
  to: string;
  label: string;
}>()

</script>

<template>
  <NuxtLink class="text-highlight text-sm font-semibold" :to="to"> {{ label }} </NuxtLink>
</template>