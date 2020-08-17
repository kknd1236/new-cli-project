import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import StatusComp from './StatusComp';

Vue.config.productionTip = false;

//전역 컴포넌트 등록
Vue.component('status-comp', StatusComp);

new Vue({
  router,
  store,
  vuetify,

  render: h => h(App)
}).$mount('#app')
