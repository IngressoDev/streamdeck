import Vue from 'vue';
import Router from 'vue-router';
import Profile from './views/Profile.vue';
import Settings from './views/Settings.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile
    },
    {
      path: '/settings',
      component: Settings,
      children: [
        {
          path: 'general',
          component: () => import('./views/GeneralSettings.vue')
        },
        {
          path: 'profile/new',
          component: () => import('./views/Profile.vue')
        }
      ]
    }
  ]
});
