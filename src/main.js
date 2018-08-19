import Vue from 'vue'
import App from './App.vue'
import VueCommentList from 'vue-comment-comments'
Vue.use(VueCommentList)
new Vue({
  el: '#app',
  render: h => h(App)
})
