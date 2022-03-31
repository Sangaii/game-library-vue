const shop: string = '/shop';
export default [
 {
  path: shop + '/list',
  name: 'GameList',
  component: () => import('@/views/List.vue'),
  meta: {
   title: '游戏列表',
  },
  children: [
   {
    path: shop + '/detail/:id',
    name: 'GameDetail',
    component: import('@/views/GameDetail.vue'),
    meta: {
     title: '游戏详情',
    },
   },
  ],
 },
];
