import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import './registerServiceWorker'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import 'materialize-css/dist/js/materialize'
import Loader from '@/components/app/Loader'
import tooltipDirective from '@/directives/tooltip.directive.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.component('Loader', Loader)

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

Vue.directive('tooltip', tooltipDirective)

firebase.initializeApp({
  apiKey: "AIzaSyAd9rPGckyuuofMQTpNtxMqKT-bb-0TX0s",
  authDomain: "crm-vue-3ccc9.firebaseapp.com",
  databaseURL: "https://crm-vue-3ccc9.firebaseio.com",
  projectId: "crm-vue-3ccc9",
  storageBucket: "crm-vue-3ccc9.appspot.com",
  messagingSenderId: "359352171033",
  appId: "1:359352171033:web:fead7531ee5535f75a0888",
  measurementId: "G-P4E7MS6S95"
})

let app 

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      history,
      render: h => h(App)
    }).$mount('#app')
  }
})


