import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import GameList from './GameList/GameList';
import Artical from './Artical/Artical';
const shop: string = '/shop';

export const routes: Array<RouteRecordRaw> = [
 {
  path: '/',
  name: 'Shop',
  component: () => import('@/layout/Layout.vue'),
  redirect: shop + '/index',
  children: [
   {
    path: shop + '/index',
    name: 'Index',
    component: () => import('@/views/Index.vue'),
    meta: {
     title: '首页',
    },
    children: [...GameList, ...Artical],
   },
  ],
 },
];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes,
});

export default router;
