<script setup>
import { onMounted, onUnmounted } from 'vue';

const updateScale = () => {
  const wrapper = document.querySelector('.responsive-wrapper');
  const container = document.querySelector('.container');
  if (wrapper && container) {
    const scaleX = wrapper.offsetWidth / 360;
    const scaleY = wrapper.offsetHeight / 644;
    const scale = Math.min(scaleX, scaleY);
    container.style.setProperty('--scale', scale);
  }
};

onMounted(() => {
  updateScale();
  window.addEventListener('resize', updateScale);

  if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.expand();
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScale);
});
</script>

<template>
  <div class="responsive-wrapper">
    <div class="container"></div>
  </div>
  <router-view />
</template>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  background-image: url("../src/assets/image1.png") no-repeat center center;
  background-size: cover;

}

.responsive-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.container {
  width: 360px;
  height: 644px;
  transform: scale(var(--scale));
  transform-origin: top center;
  position: relative;

}
</style>
