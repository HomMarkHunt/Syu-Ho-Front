import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Root from './components/syuho/Root.vue'
import Post from './components/syuho/Post.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Root },
  { path: '/new', components: Post }
]

const vueRouter = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  vueRouter,
  template: '<App/>',
  components: { App }
}).$mount('#app')
