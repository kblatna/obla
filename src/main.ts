import './assets/scss/app.scss' 
import '../node_modules/swiper/swiper.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { Icon } from '@iconify/vue'

import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag"

const app = createApp(App)

app.use(VueGtag, {
    config: {
        id: "G-WEVXG15DMN",
        params: {
            anonymize_ip: true             
        }
    },
})

app.component('IconifyIcon', Icon)

app.mount('#app')
