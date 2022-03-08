import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
 alias: {
  '@': path.resolve(__dirname, 'src'),
 },
 css: {
  preprocessorOptions: {
   less: {
    charset: false,
    additionalData: '@import "./src/assets/style/global.less";',
   },
  },
 },
 base: process.env.VITE_BASE_URL,
 plugins: [
  vue(),
  Components({
   resolvers: [AntDesignVueResolver()],
  }),
 ],
 define: {
  'process.env': {
   BASE_API: 'http://localhost:8021/api',
   BASE_URL: '/',
  },
 },
});
