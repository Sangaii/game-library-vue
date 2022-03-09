import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import GameList from './GameList/GameList';

const routes: Array<RouteRecordRaw> = [
 {
  path: '/',
  name: 'Index',
  component: import('@/views/Index.vue'),
  children: [...GameList],
 },
];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes,
});

export default router;
