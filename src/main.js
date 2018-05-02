// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './js/router'
import ElementUI from 'element-ui'
import  axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import  Vuex from 'vuex'
import store from './js/vuex/store'
import moment from 'moment';
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.$moment = moment;
Vue.prototype.$http=axios;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
