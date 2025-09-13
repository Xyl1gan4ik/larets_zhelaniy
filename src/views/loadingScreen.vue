<template>
  <div class="container">
    

    <!-- Сундук -->
    <img src="@/assets/chest.svg" alt="Сундук" class="chest" />

    <!-- Зона загрузки -->
    <div class="loader">
      <!-- Ключ -->
      <img src="@/assets/key.png" alt="Ключ" class="key" />
      <!-- Вращающиеся стрелки (SVG) -->
      <img src="@/assets/arrows.svg" alt="Стрелки" class="arrows" />
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showLoading = ref(false)

onMounted(() => {
  // Если страница загружена полностью (reload) или первый заход
  if (performance.getEntriesByType('navigation')[0].type === 'reload' || performance.getEntriesByType('navigation')[0].type === 'navigate') {
    showLoading.value = true
    setTimeout(() => {
      router.replace('/home') // после 3 секунд → home
    }, 3000)
  } else {
    // Переход внутри приложения, редирект не нужен
    router.replace('/home')
  }
})
</script>



<style scoped>


.container {
  position: relative;
  width: 360px;
  height: 644px;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
}



.chest {
  position: absolute;
  left: 16px;
  top: 106px;
  width: 328px;
  height: 328px;

}

/* Контейнер под ключ и стрелки */

/* Ключ по центру */
.key {
 position: absolute;
 left: 146.5px;
 top: 508px;
 width: 59px;
 height: 58px;
}

/* Стрелки вращаются */
.arrows {
  width: 100px;
  height: 100px;
  animation: spin 1.5s linear infinite;
  position: absolute;
  top: 485px;
  left: 125px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}
</style>
