// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'script-loader!jquery/dist/jquery.min';
import 'script-loader!what-input/dist/what-input.min';
import 'script-loader!foundation-sites/dist/js/foundation.min';

// Vue libraries
import Vue from 'vue';
import App from './App';
import router from './router';

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App },
});
