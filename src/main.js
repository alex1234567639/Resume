import { createApp } from 'vue'
import './assets/css/index.css'
import App from './App.vue'
import router from './router/index'
import { i18n } from './i18n/i18n.js'

createApp(App)
    .use(i18n)
    .use(router)
    .mount('#app')
