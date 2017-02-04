// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Vue libraries
import Vue from 'vue';
import VueRouter from 'vue-router';
// App
import App from './App';
// Components
import Home from './components/Home';
import Reveal from './components/Reveal';
import Slider from './components/Slider';
import Tooltip from './components/Tooltip';
import Icons from './components/Icons';
import DropdownMenu from './components/DropdownMenu';
import DrilldownMenu from './components/DrilldownMenu';
import AccordionMenu from './components/AccordionMenu';
import Magellan from './components/Magellan';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Tabs from './components/Tabs';
import OffCanvas from './components/OffCanvas';
import Orbit from './components/Orbit';

// Init Vue-Router
Vue.use(VueRouter);

// Include Foundation JS as a custom directive, only when you need it.
// Add `v-foundation` to Foundation JavaScript components (works with Slider, Tooltip)
// However, this is buggy and an inferior approach to the mixin (they can't be used together)

// Vue.directive('foundation', {
//   bind(el) {
//     $(el).foundation();
//   },
//   unbind(el) {
//     $(el).foundation('destroy');
//   },
// });

const router = new VueRouter({
  mode: 'history',
  history: true,
  linkActiveClass: 'active',
  routes: [
    // redirect / to /home
    { path: '/', redirect: '/home' },
    // routes
    { path: '/home', component: Home },
    { path: '/reveal', component: Reveal },
    { path: '/slider', component: Slider },
    { path: '/tooltip', component: Tooltip },
    { path: '/dropdown-menu', component: DropdownMenu },
    { path: '/drilldown-menu', component: DrilldownMenu },
    { path: '/accordion-menu', component: AccordionMenu },
    { path: '/magellan', component: Magellan },
    { path: '/accordion', component: Accordion },
    { path: '/simple-dropdown', component: Dropdown },
    { path: '/tabs', component: Tabs },
    { path: '/off-canvas', component: OffCanvas },
    { path: '/orbit', component: Orbit },
    { path: '/icons', component: Icons },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
