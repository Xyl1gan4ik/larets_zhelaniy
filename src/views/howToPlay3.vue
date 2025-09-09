<template>
    <div class="container">
        <div class="krest" @click="$router.push('/home')">
            <img src="../assets/krest.svg" alt="exit">
        </div>

        <div class="text-how-to-play3">
            <span>Присоединяйся к дворцу желаний <br>
                и получай по 2 ключа ежедневно</span>

        </div>

        <div class="big-keys">
            <img src="../assets/big-keys.svg" alt="bigkeys">
        </div>

        <div class="skip">
            <div class="left" @click="$router.push('/play2')">
                <img src="../assets/left.svg" alt="left">
            </div>
            <div class="right" @click="$router.push('/play4')">
                <img src="../assets/right.svg" alt="right">
            </div>
            <div class="skip-bar1">
                <img src="../assets/skip-bar3.svg" alt="skip_bar">
            </div>
        </div>
    </div>
</template>

<script></script>
<style>
.container {
  position: relative;
  width: 360px;
  height: 644px;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  background-color: #FFFAFA;
}

.text-how-to-play3 {
    position: absolute;
    left: 31px;
    top: 100px;
    width: 295px;
    height: 38px;
    color: #FFA0A2;
    text-align: center;
    font-family: 'Sunday', sans-serif;
    font-weight: 400;
    font-size: 16px;

}

.big-keys {
    position: absolute;
    left: 52px;
    top: 175px;
}
</style>