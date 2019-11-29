import Vue from 'vue';
import firebase from 'firebase/app';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

const config = {
  apiKey: 'AIzaSyDg0mKFF-CCZKHzYYnV4UB4XyqplvIDBoo',
  authDomain: 'authentication-sample-001.firebaseapp.com',
  databaseURL: 'https://authentication-sample-001.firebaseio.com',
  projectId: 'authentication-sample-001',
  storageBucket: 'authentication-sample-001.appspot.com',
  messagingSenderId: '454648867512',
  appId: '1:454648867512:web:74385d3d7b628331'
};
firebase.initializeApp(config);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
