// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from './components/Hello';
import Info from './components/Info';

Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Hello },
    { path: '/info', component: Info },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
