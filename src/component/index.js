import CommentList from './vue-comment-list.vue'
const VueCommentList = {
  install (Vue, options = {}) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueCommentList', CommentList)
    Vue.filter('time', function (value) {
      let date = new Date(value)
      return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    })
    Vue.filter('avatar', function (value) {
      return {'background': 'url(' + value + ') no-repeat left top'}
    })
  }
}
export default VueCommentList
