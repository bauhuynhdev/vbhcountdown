import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$isDevelopment = process.env.NODE_ENV === 'development';
const date = new Date;
Vue.prototype.$timeZone = -(date.getTimezoneOffset()) / 60;

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
