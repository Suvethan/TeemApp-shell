import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import VueFire from 'vuefire'

import App from './components/App.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import About from './components/common/About.vue'
import Quote from './components/Quote.vue'


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
  { path: '*', redirect: '/dashboard' }
]

// Set up a new router
let router = new Router({
  routes: routes
})

// Start up our app
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
