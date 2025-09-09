<template>
    <div class="container">
        <div class="krest" @click="$router.push('/home')">
            <img src="../assets/krest.svg" alt="exit">
        </div>
        <div class="header">
            <span class="text-how-to-play1">Получай сертификаты <br>
                на косметику от 300₽ до 1000₽ <br>каждый день</span>
        </div>

        <div class="chest-play1">
            <img src="../assets/chestplay1.svg" alt="chest">
        </div>

        <div class="skip">
            <div class="left" @click="$router.push('/play4')">
                <img src="../assets/left.svg" alt="left">
            </div>
            <div class="right" @click="$router.push('/play2')">
                <img src="../assets/right.svg" alt="right">
            </div>
            <div class="skip-bar1">
                <img src="../assets/skip-bar1.svg" alt="skip_bar">
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

.text-how-to-play1 {
    position: absolute;
    left: 31px;
    top: 100px;
    width: 295px;
    height: 57px;
    color: #FFA0A2;
    text-align: center;
    font-family: 'Sunday',sans-serif;
    font-weight: 400;
    font-size: 16px;
}

.krest {
    position: absolute;
    top: 40px;
    right: 16px;
}

.chest-play1 {
    position: absolute;
    left: 44px;
    top: 197px;
    width: 270px;
    height: 252px;

}
.left {
    position: absolute;
    left: 71px;
    top: 484px;

}

.right {
    position: absolute;
    top: 484px;
    right: 72px;
}

.skip-bar1 {
    position: absolute;
    left: 146px;
    top: 544px;
}
</style>