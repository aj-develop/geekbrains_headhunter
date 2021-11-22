import { createApp } from 'vue';
import App from './App.vue';
import store from '@store';
import router from '@router';
import './layout/css/style.css';

const app = createApp(App);
app.config.globalProperties.$store = store;

app.use(store).use(router).mount('#app');
