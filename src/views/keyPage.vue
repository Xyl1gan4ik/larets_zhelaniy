<template>
  <div class="container">
    <div class="header">
      <div>
        <button class="text123">Пригласи подругу</button>
      </div>
      <div class="logo">
        <img src="../assets/Frame 11.svg" alt="logo">
      </div>
    </div>

    <div class="card-background">
      <p class="card-text">
        Поселись в дворце желаний <br />
        и получай +2 ключа ежедневно
      </p>
      <button class="card-button">Подробнее</button>
    </div>



    <div class="ref-list">

      <div class="cloud"><img src="../assets/Ellipse 1.png" alt="cloud"></div>
      <span class="my-ref">СПИСОК ПОДРУГ</span>
      <span class="ref-bar-text">Приглашай подруг и получай <br>
        +1 ключ за каждую подругу</span>
    </div>

    <div class="usernames"></div>

    <div class="ref-link">
      <button class="invite">ПРИГЛАСИТЬ ПОДРУГУ</button>
    </div>

    <div class="navbar">
      <div class="home-nav" @click="$router.push('/home')">
        <img src="../assets/home-nav.svg" alt="home">
      </div>
      <div class="ref-nav">
        <img src="../assets/ref-nav.svg" alt="refnav">
      </div>

      <div class="tron-nav" @click="$router.push('/crown')">
        <img src="../assets/tron-nav.svg" alt="tron">
      </div>
    </div>

  </div>
</template>
<script>

</script>
<style>
.container {
  position: relative;
  width: 360px;
  height: 644px;
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  background-image: url(../assets/image1.png)
}

.text123 {
  display: inline-flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 16px;
  top: 32px;

  min-width: 149px;
  height: 40px;
  padding: 6px 14px;

  background-color: #fff;
  border-radius: 50px;
  border: none;


  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #FFA0A2;

  cursor: pointer;

}

.card-background {
  width: 319px;
  min-height: 130px;

  display: flex;
  flex-direction: column; /* текст сверху, кнопка снизу */
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 16px;
  top: 102px;

  border-radius: 10px;
  background-color: #FFFFFF;
  overflow: hidden;
}

.card-text {
  width: 100%; /* пусть адаптируется, а не фикс 286px */
  max-width: 286px; /* ограничение как в фигме */
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.144px;
  text-align: left;
  color: #FFA0A2;
}

.card-button {
  width: 100%;
  max-width: 295px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6 14px; /* лучше вместо 14/6 из фигмы */

  border-radius: 50px;
  background-color: #FFA0A2;
  border: none;

  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s ease;
}

.card-button:hover {
  background-color: #e98e8f;
}



.my-ref {
  position: absolute;
  width: 253px;
  height: 25px;
  left: 54px;
  top: 245px;
  font-family: 'Monrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #FFA0A2;
  text-align: center;
}

.ref-bar-text {
  position: absolute;
  left: 54px;
  top: 275px;
  width: 253px;
  height: 30px;
  font-family: 'Monrope', sans-serif;
  font-weight: 600px;
  font-size: 14px;
  color: #FFA0A2;
  text-align: center;
}

.invite {
  display: inline-flex;              
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 37px;
  top: 482px;
  
  width: 286px;
  height: 51px;
  
  padding: 12px 24px;                 
  
  background-color: #FFA0A2;
  border-radius: 50px;               
  border: none;


  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  font-weight: 600;                  
  color: #ffff;                   
  
  cursor: pointer;

}

.invite:hover {
  background-color: #e98e8f;
}

.home-nav {
  position: absolute;
  left: 51px;
  top: 565px;
  width: 54px;
  height: 54px;
}

.ref-nav {
  position: absolute;
  width: 54px;
  height: 54px;
  left: 153px;
  top: 565px;
}


.tron-nav {
  position: absolute;
  width: 54px;
  height: 54px;
  right: 51px;
  top: 565px;
}
</style>