import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import New from '@/components/New';
import Setup from '@/components/Setup';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  }, {
    path: '/new',
    name: 'New',
    component: New,
  }, {
    path: '/setup',
    name: 'Setup',
    component: Setup,
  }, {
    path: '*',
    redirect: '/',
  }],
});
