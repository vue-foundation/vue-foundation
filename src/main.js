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
import Orbit from './components/Orbit';

// Init Vue-Router
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  history: true,
  linkActiveClass: 'active',
  routes: [
    // redirect / to /home
    { path: '/', redirect: '/vue-foundation/home' },
    // routes
    { path: '/vue-foundation/home', component: Home },
    { path: '/vue-foundation/reveal', component: Reveal },
    { path: '/vue-foundation/slider', component: Slider },
    { path: '/vue-foundation/tooltip', component: Tooltip },
    { path: '/vue-foundation/dropdown-menu', component: DropdownMenu },
    { path: '/vue-foundation/drilldown-menu', component: DrilldownMenu },
    { path: '/vue-foundation/accordion-menu', component: AccordionMenu },
    { path: '/vue-foundation/magellan', component: Magellan },
    { path: '/vue-foundation/accordion', component: Accordion },
    { path: '/vue-foundation/simple-dropdown', component: Dropdown },
    { path: '/vue-foundation/tabs', component: Tabs },
    { path: '/vue-foundation/orbit', component: Orbit },
    { path: '/vue-foundation/icons', component: Icons },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
