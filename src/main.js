import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

// https://bootstrap-vue.org/docs
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// https://vite-plugin-pwa.netlify.app/guide/auto-update.html#runtime
import { registerSW } from 'virtual:pwa-register';
const updateSW = registerSW({
  onOfflineReady() {},
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
