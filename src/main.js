import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from '@/Store/Store';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');