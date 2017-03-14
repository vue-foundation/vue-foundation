import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from '@/components/Home';
import Reveal from '@/components/Reveal';
import Slider from '@/components/Slider';
import Tooltip from '@/components/Tooltip';
import DropdownMenu from '@/components/DropdownMenu';
import DrilldownMenu from '@/components/DrilldownMenu';
import AccordionMenu from '@/components/AccordionMenu';
import Magellan from '@/components/Magellan';
import Accordion from '@/components/Accordion';
import Dropdown from '@/components/Dropdown';
import Tabs from '@/components/Tabs';
import Orbit from '@/components/Orbit';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // routes
    { name: 'home', path: '/', component: Home },
    { name: 'reveal', path: '/reveal', component: Reveal },
    { name: 'slider', path: '/slider', component: Slider },
    { name: 'tooltip', path: '/tooltip', component: Tooltip },
    { name: 'dropdown-menu', path: '/dropdown-menu', component: DropdownMenu },
    { name: 'drilldown-menu', path: '/drilldown-menu', component: DrilldownMenu },
    { name: 'accordion-menu', path: '/accordion-menu', component: AccordionMenu },
    { name: 'magellan', path: '/magellan', component: Magellan },
    { name: 'accordion', path: '/accordion', component: Accordion },
    { name: 'dropdown', path: '/dropdown', component: Dropdown },
    { name: 'tabs', path: '/tabs', component: Tabs },
    { name: 'orbit', path: '/orbit', component: Orbit },
  ],
});
