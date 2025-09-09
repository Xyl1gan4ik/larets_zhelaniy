<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.Telegram.WebApp) {
    window.Telegram.WebApp.expand();
  }
});
</script>

<template>
  <router-view />
</template>
