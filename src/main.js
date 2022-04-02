import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import "echarts";
import '@arco-design/web-vue/es/index.less';
import ArcoVue from '@arco-design/web-vue';

import '@/assets/font/font.css';
import '@/assets/css/index.less';
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import { ElTable, ElTableColumn } from 'element-plus'


const app = createApp(App);
app.component('v-chart', ECharts)
app.component(ElTable.name, ElTable);
app.component(ElTableColumn.name, ElTableColumn);

app.use(store).use(router).use(ArcoVue).mount('#app')