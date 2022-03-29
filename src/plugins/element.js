import Vue from 'vue'
import '../element-variables.scss'
import locale from 'element-ui/lib/locale/lang/en'

import { Table, TableColumn } from 'element-ui';
Vue.prototype.$ELEMENT = { locale };
Vue.use(Table);
Vue.use(TableColumn);