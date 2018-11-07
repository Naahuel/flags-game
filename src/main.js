import Vue from 'vue';
import {
  MdApp,
  MdContent,
  MdToolbar,
} from 'vue-material/dist/components';
import App from './App.vue';
import store from './store';

import './registerServiceWorker';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdApp);
Vue.use(MdContent);
Vue.use(MdToolbar);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
