const shop: string = '/shop';
export default [
 {
  path: shop + '/list',
  name: 'GameList',
  component: () => import('@/views/game/List.vue'),
  meta: {
   title: '游戏列表',
  },
 },
 {
  path: shop + '/detail',
  name: 'GameDetail',
  component: () => import('@/views/game/GameDetail.vue'),
  meta: {
   title: '游戏详情',
  },
 },
];
