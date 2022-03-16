import {createApp} from 'vue'
import App from './App.vue'
import router from './router/router.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
    .use(router)
    .mount('#app')