import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
