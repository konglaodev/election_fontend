import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
Vue.config.productionTip = false
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBnOXHhnKJpMoL-0RWW7yVDZwFAy91D4b4",
  authDomain: "election-1ffdd.firebaseapp.com",
  projectId: "election-1ffdd",
  storageBucket: "election-1ffdd.appspot.com",
  messagingSenderId: "1040665734908",
  appId: "1:1040665734908:web:93e27bf37fb2b50768f179",
  measurementId: "G-3BQSB4RHCW"
};
initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
