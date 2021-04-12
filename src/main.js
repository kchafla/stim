import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './mystore'
/* import language from './language' */

createApp(App).use(store).use(router).mount('#app')
