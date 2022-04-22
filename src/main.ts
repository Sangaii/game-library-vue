import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';
//引入antDesign
import 'ant-design-vue/dist/antd.css';
router.beforeEach((to, from, next) => {
 console.log(to);
 if (typeof to.meta.title === 'string') {
  document.title = to.meta.title;
 }
 next();
});

import './assets/style/global.less';
const app = createApp(App);
app.use(router).mount('#app');
