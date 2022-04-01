import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/font/font.css';
import '@/assets/css/index.less';

createApp(App).use(store).use(router).use(ArcoVue).mount('#app')