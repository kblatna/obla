import './assets/scss/app.scss' 
import '../node_modules/swiper/swiper.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { Icon } from '@iconify/vue'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('IconifyIcon', Icon)

app.mount('#app')
