import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/font/font.css';
import '@/assets/css/index.less';

import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'

import { ElTable, ElTableColumn } from 'element-plus'
const app = createApp(App);
app.component(ElTable.name, ElTable);
app.component(ElTableColumn.name, ElTableColumn);

app.use(store).use(router).use(ArcoVue).mount('#app')