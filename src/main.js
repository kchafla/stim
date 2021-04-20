import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import mystore from './mystore' */
import store from './store'

import i18n from './i18n'

const vm = createApp(App)
    .use(store)
    .use(i18n)
/*     .use(mystore) */
    .use(router)
    .mount('#app')

store.$app = vm;