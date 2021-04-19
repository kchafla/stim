import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import mystore from './mystore' */
import store from './store'
/* import language from './language' */

createApp(App)
    .use(store)
/*     .use(mystore) */
/*     .use(language) */
    .use(router)
    .mount('#app')
