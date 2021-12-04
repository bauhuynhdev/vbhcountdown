import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$isDevelopment = process.env.NODE_ENV === 'development';

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
