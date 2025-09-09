<template>
    <div class="container">
        <div class="krest" @click="$router.push('/home')">
            <img src="../assets/krest.svg" alt="exit">
        </div>
        <div class="text-how-to-play2">
            <span>Приглашай подруг и получай <br>
                по 1 ключу за каждую</span>

        </div>

        <div class="big-key">
            <img src="../assets/bigkey.svg" alt="bigkey">
        </div>

        <div class="skip">
            <div class="left" @click="$router.push('/play1')">
                <img src="../assets/left.svg" alt="left">
            </div>
            <div class="right" @click="$router.push('/play3')">
                <img src="../assets/right.svg" alt="right">
            </div>
            <div class="skip-bar1">
                <img src="../assets/skip-bar2.svg" alt="skip_bar">
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

.text-how-to-play2 {
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

.big-key {
    position: absolute;
    left: 52px;
    top: 175px;
}
</style>