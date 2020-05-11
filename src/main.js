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
import Paginate from 'vuejs-paginate/dist/index.js'
import localizeFilter from './filters/localize.filters'
import titlePlugin from '@/utils/title.plugin'
import VueMeta from 'vue-meta'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)

Vue.directive('tooltip', tooltipDirective)

firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
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


