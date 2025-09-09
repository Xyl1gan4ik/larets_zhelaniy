<template>
    <div class="container">
        <div class="krest" @click="$router.push('/home')">
            <img src="../assets/krest.svg" alt="exit">
        </div>

        <div class="text-how-to-play4">
            <span>попади в топ-3 <br> по количеству приглашенных подруг <br> и получи гарантированный приз</span>

        </div>

        <div class="crown">
            <img src="../assets/crown.svg" alt="crown">
        </div>

        <div class="skip">
            <div class="left" @click="$router.push('/play3')">
                <img src="../assets/left.svg" alt="left">
            </div>
            <div class="right" @click="$router.push('/play1')">
                <img src="../assets/right.svg" alt="right">
            </div>
            <div class="skip-bar1">
                <img src="../assets/skip-bar4.svg" alt="skip_bar">
            </div>
        </div>

        <div class="rules">
            <span>Правила</span>

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

.text-how-to-play4 {
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

.crown {
    position: absolute;
    left: 80px;
    top: 237px;
    height: 176px;
    width: 200px;

}

.rules {
    position: absolute;
    left: 151px;
    top: 437px;
    width: 58px;
    height: 19px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #FFA0A2;
}
</style>