import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';
//引入antDesign
import 'ant-design-vue/dist/antd.css';
import { appendFile } from 'fs';

import './assets/style/global.less';
const app = createApp(App);
app.use(router).mount('#app');
