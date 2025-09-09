import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './components/main.css'


createApp(App)
  .use(router)   // подключаем роутер
  .mount('#app')
