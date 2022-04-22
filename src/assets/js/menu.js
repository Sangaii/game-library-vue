import {
 UserOutlined,
 VideoCameraOutlined,
 UploadOutlined,
 MenuUnfoldOutlined,
 MenuFoldOutlined,
} from '@ant-design/icons-vue';
export const homeHeaderMenu = [
 {
  name: '主页',
  value: 'index',
  path: '/shop/index',
 },
 {
  name: '游戏库',
  value: 'list',
  path: '/shop/list',
 },
 {
  name: '游戏文章',
  value: 'article',
  path: '/shop/article',
 },
 {
  name: '游戏论坛',
  value: 'forum',
  path: '/shop/forum',
 },
];

export const adminSideMenu = [
 {
  name: '游戏管理',
  enName: 'Game Manage',
  value: 'gameManage',
  icon: `videoCameraOutlined`,
  children: [
   {
    name: '游戏列表',
    enName: 'Game List',
    value: 'gameList',
    path: '/admin/game/list',
   },
  ],
 },
 {
  name: '用户管理',
  enName: 'User Manage',
  value: 'userManage',
  icon: 'userOutlined',
  children: [
   {
    name: '用户列表',
    enName: 'User List',
    value: 'userList',
    path: '/admin/user/list',
   },
  ],
 },
];

// const renderIcon = (icon) => {
//  return <icon {...{ icon }} />;
// };
