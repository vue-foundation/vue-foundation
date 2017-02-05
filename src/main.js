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
  linkActiveClass: 'active',
  routes: [
    // routes
    { path: '/', component: Home },
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
