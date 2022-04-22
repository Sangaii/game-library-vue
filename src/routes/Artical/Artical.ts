const shop: string = '/shop';
export default [
 {
  path: shop + '/article',
  name: 'Artical',
  component: import('@/views/game/Artical.vue'),
  meta: {
   title: '游戏文章',
  },
 },
];
