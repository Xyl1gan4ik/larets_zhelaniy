import { createRouter, createWebHistory } from 'vue-router'
import LoadingPage from '../views/loadingScreen.vue'
import HomePage from '../views/homePage.vue'
import KeyPage from '../views/keyPage.vue'
import CrownPage from '../views/crownPage.vue'
import HowToPlay1 from '../views/howToPlay1.vue'
import HowToPlay2 from '../views/howToPlay2.vue'
import HowToPlay3 from '../views/howToPlay3.vue'
import HowToPlay4 from '../views/howToPlay4.vue'

const routes = [
  { path: '/home', name: 'Home', component: HomePage }, // основной путь
  { path: '/keys', name: 'Keys', component: KeyPage },
  { path: '/crown', name: 'Crown', component: CrownPage },
  { path: '/play1', name: 'Play1', component: HowToPlay1 },
  { path: '/play2', name: 'Play2', component: HowToPlay2 },
  { path: '/play3', name: 'Play3', component: HowToPlay3 },
  { path: '/play4', name: 'Play4', component: HowToPlay4 },
  { path: '/', name: 'Loading', component: LoadingPage } // отдельно, не используем для кнопок
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
