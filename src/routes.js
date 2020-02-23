import Home from './Home.vue';
import Header from './Header.vue';//has the navbar
import User from './User.vue';
import UserEdit from './UserEdit.vue';
import UserStart from './UserStart.vue';
import UserDetail from './UserDetail.vue';

export const routes = [
  { path: '', name: 'home', component: Home },//1. main page
  { path: '/user', component: User,//2. main page
    children: [
      { path: '', component: UserStart},
      { path: ':id', component: UserDetail},
      { path: ':id/edit', component: UserEdit, name: 'UserEdit'},
    ]},
  { path: '*', redirect:'/'}
];