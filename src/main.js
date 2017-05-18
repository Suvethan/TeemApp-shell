import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import VueFire from 'vuefire'
import firebase from 'firebase'
import firebaseui from 'firebaseui';

import App from './components/App.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import Auth from './components/common/Auth.vue'
import AuthSuccess from './components/common/AuthSuccess.vue'
import About from './components/common/About.vue'
import Quote from './components/Quote.vue'
// import {config} from './helpers/firebaseConfig'
import db from './helpers/firebaseConfig'

// Install plugins
Vue.use(Router)
Vue.use(Resource)
Vue.use(VueFire)

// route config
let routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/quote',
    name: 'quote',
    component: Quote
  },
  { path: '/', 
    component: Auth },
  { path: '/auth', 
    component: Auth },
  { path: '/success', 
    component: AuthSuccess }
]

// Set up a new router
let router = new Router({
  routes: routes
})

// Start up our app
new Vue({
  router: router,
  created() {
    //var TeemApp = firebase.initializeApp(config);
    console.log(db);
    db.teemApp.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
     });
    },
  render: h => h(App)
}).$mount('#app')
