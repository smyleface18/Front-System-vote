import { createApp } from 'vue'
import './style.css'
import App from './Intro.vue'
import AppUser from './AppUser.vue'
import VCalendar from 'v-calendar'
import router from './routerMain'
import routerIntro from './routerIntro'

createApp(App).use(routerIntro).mount('#app')

createApp(AppUser).use(VCalendar, { 
    componentPrefix: 'vc',
     }).use(router).mount('#AppUser')



