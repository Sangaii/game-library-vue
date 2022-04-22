import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import GameList from './GameList/GameList';
import Artical from './Artical/Artical';
const shop: string = '/shop';
const admin: string = '/admin';

export const routes: Array<RouteRecordRaw> = [
 {
  path: '/',
  name: 'Shop',
  component: () => import('@/layout/front/Layout.vue'),
  redirect: shop + '/index',
  children: [
   {
    path: shop + '/',
    name: 'Index',
    component: () => import('@/views/game/Index.vue'),
    redirect: shop + '/index',
    meta: {
     title: '首页',
    },
    children: [
     {
      path: shop + '/index',
      name: 'Index',
      component: () => import('@/views/game/Home.vue'),
      meta: {
       title: '首页',
      },
     },
     ...GameList,
     ...Artical,
    ],
   },
  ],
 },
 {
  path: '/admin',
  name: 'Admin',
  component: () => import('@/layout/admin/Layout.vue'),
  // redirect: admin + '/index',
  children: [
   {
    path: admin + '/',
    name: 'AdminIndex',
    component: () => import('@/views/admin/Index.vue'),
    // redirect: admin + '/index',
    meta: {
     title: '首页',
    },
    // children: [
    //  {
    //   path: shop + '/index',
    //   name: 'Index',
    //   component: () => import('@/views/game/Home.vue'),
    //   meta: {
    //    title: '首页',
    //   },
    //  },
    //  ...GameList,
    //  ...Artical,
    // ],
   },
  ],
 },
 {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/Login.vue'),
 },
 {
  path: '/register',
  name: 'Register',
  component: () => import('@/views/login/Register.vue'),
 },
];

const router = createRouter({
 history: createWebHistory(process.env.BASE_URL),
 routes,
});

export default router;
