import { createApp } from 'vue'
import './style.css'
import App from './Intro.vue'
import AppUser from './AppUser.vue'
import VCalendar from 'v-calendar'

createApp(App).mount('#app')
createApp(AppUser).use(VCalendar, { 
    componentPrefix: 'vc',
     }).mount('#AppUser')



