<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  if (window.Telegram.WebApp) {
    window.Telegram.WebApp.expand();
  }
});

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
  // Вызываем функцию при монтировании
  updateScale();
  
  // Добавляем слушатель для изменения размера окна
  window.addEventListener('resize', updateScale);
  
  // Растягиваем приложение на весь экран в Telegram Mini App
  if (window.Telegram.WebApp) {
    window.Telegram.WebApp.expand();
  }
});

onUnmounted(() => {
  // Удаляем слушатель при размонтировании, чтобы избежать утечек памяти
  window.removeEventListener('resize', updateScale);
});
</script>

<template>
  <div class="responsive-wrapper">
    <div class="container">
    </div>
  </div>
  <router-view />
</template>


<style>
body, html, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Важно для избежания скролла */
}

/* Этот класс будет масштабировать весь ваш дизайн */
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

/* Ваш контейнер, который будет масштабироваться */
.container {
  /* Оставляем ваши фиксированные размеры */
  width: 360px;
  height: 644px;
  
  /* Масштабируем контейнер, чтобы он вписался в экран */
  transform: scale(var(--scale));
  transform-origin: top center;
  
  /* Ваши остальные стили */
  position: relative;
  background-image: url(../assets/image1.png);
  background-size: cover;
}
</style>