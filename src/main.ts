import Vue from 'vue'
import App from './App.vue'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c'

Vue.use(VueAxios, axios)


Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app')
