<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <button class="custom-btn" @click="$router.push('/play1')">Как играть?</button>

        <div class="logo">
          <img src="../assets/Frame 11.svg" alt="logo">
        </div>
      </div>
    </div>
    <div class="main-text">
      <span>КРУТИ ЛАРЕЦ</span>
    </div>
    <div class="roulette">

    <div class="main-chest">
      <img src="../assets/chest1.svg" alt="mainchest">
    </div>
    <div class="left-chest">
      <img src="../assets/chest3.svg" alt="leftchest">
    </div>
    <div class="right-chest">
      <img src="../assets/chest2.svg" alt="rightchest">
    </div>
  </div>


  <div class="open-chest">
    <div>
      <button class="open">Открыть Ларец</button>
    </div>
    <div>
      <button class="keys">У вас 3 ключа</button>
    </div>
  </div>

  <div class="navbar">
    <div class="home">
      <img src="../assets/Chest-nav.svg" alt="nav1">
    </div>

    <div class="ref" @click="$router.push('/keys')">
      <img src="../assets/referall-nav.svg" alt="referal">
    </div>

    <div class="tron" @click="$router.push('/crown')">
      <img src="../assets/tron-nav.svg" alt="tron">
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
  background-image: url(../assets/image1.png)

}


.custom-btn {
  display: inline-flex;              /* чтобы текст центрировался как в auto layout */
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 16px;
  top: 32px;
  
  width: 107px;
  height: 40px;
  
  padding: 6px 14px;                 /* сверху/снизу 6px, слева/справа 14px */
  
  background-color: #FFFFFF;
  border-radius: 50px;               /* скругление */
  border: none;
  
  font-size: 16px;
  font-weight: 400;                  /* regular */
  color: #FFA0A2;                    /* примерный розовый как на макете */
  
  cursor: pointer;
}



.text {
  position: absolute;
  color: #FFA0A2;
  margin-left: 30px;  /* отступ слева */
  margin-top: 43px; /* отступ сверху */
  width: 79px;
  height: 19px;
  line-height: auto;
  letter-spacing: -0,8%;
  white-space: nowrap;
}

.logo{
  position: absolute;
  left: 304px;
  top: 32px;
  width: 40px;
  height: 40px;
}

.main-text {
  position: absolute;
  color: #FFA0A2;
  width: 230px;
  height: 42px;
  left: 64px;
  top: 126px;
  font-family: 'Sunday', sans-serif;
  font-weight: 400;
  font-size: 36px;

}

.main-chest {
  position: absolute;
  left: 112px;
  top: 237px;
}

.left-chest {
  position: absolute;
  top: 254px;
  right: 265px;
}

.right-chest {
  position: absolute;
  top: 254px;
  left: 283px;
}

.open {
  display: inline-flex;              /* чтобы текст центрировался как в auto layout */
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 53px;
  top: 423px;
  
  width: 254px;
  height: 51px;
  
  padding: 12px 24px;                 /* сверху/снизу 6px, слева/справа 14px */
  
  background-color: #FFA0A2;
  border-radius: 50px;               /* скругление */
  border: none;


  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 600;                  /* regular */
  color: #fff;                    /* примерный розовый как на макете */
  
  cursor: pointer;

}

.keys {
  display: inline-flex;              
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 115.5px;
  top: 486px;
  
  width: 129px;
  height: 35px;
  
  padding: 8px 16px;                 
  
  background-color: #fff;
  border-radius: 50px;               
  border: none;


  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;                  
  color: #FFA0A2;                   
  
  cursor: pointer;

}

.home {
  position: absolute;
  left: 51px;
  top: 565px;
  width: 54px;
  height: 54px;
}

.ref {
  position: absolute;
  width: 54px;
  height: 54px;
  left: 153px;
  top: 565px;
}

.tron {
  position: absolute;
  width: 54px;
  height: 54px;
  right: 51px;
  top: 565px;
}


</style>