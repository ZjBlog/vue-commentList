(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .main[data-v-3ebbfa05] { max-width:1200px; margin:auto; text-align:center; } .xwcms[data-v-3ebbfa05] { flex-shrink: 0; margin-left: 10px; width: 100px; height: 100px; /* margin: 0 auto; */ /* background: no-repeat url(\"../../static/images/123.png\") left top; */ -webkit-background-size: 100px 100px; -moz-background-size: 100px 100px; background-size: 100px 100px; -webkit-border-radius: 50px; border-radius: 50px; -webkit-transition: -webkit-transform 2s ease-out; -moz-transition: -moz-transform 2s ease-out; -o-transition: -o-transform 2s ease-out; -ms-transition: -ms-transform 2s ease-out; } .xwcms[data-v-3ebbfa05]:hover { -webkit-transform: rotateZ(360deg); -moz-transform: rotateZ(360deg); -o-transform: rotateZ(360deg); -ms-transform: rotateZ(360deg); transform: rotateZ(360deg); } .er1[data-v-3ebbfa05] { width: 100%; display: flex; display: -webkit-flex; /* Safari */ display: flex; justify-content:flex-end; align-items: center; border: 1px solid; border-radius:6px; height: 42px; margin: auto; } .er2[data-v-3ebbfa05]{ width: 100%; display: flex; display: -webkit-flex; /* Safari */ display: flex; /* justify-content:flex-end; */ align-items: center; border: 1px solid; border-radius:6px; height: 100px; margin: auto; background-color: white; } textarea[data-v-3ebbfa05]{outline:none} .text[data-v-3ebbfa05] { text-indent:34px; border-style:none; margin:0; padding:0; width: 100%; resize:none; height: 76px; border:solid 1px; border-radius:6px; word-break:break-all; word-wrap: break-word; line-height: 24px; margin-bottom:15px; } .text3[data-v-3ebbfa05] { word-break:normal; white-space:pre-warp; word-wrap:break-word; text-indent:2em; text-align:left; } .button2[data-v-3ebbfa05] { display: inline-block; border-radius: 4px; border: none; color: #FFFFFF; text-align: center; font-size: 20px; padding: 12px; width: 200px; transition: all 0.5s; cursor: pointer; margin: 5px; } .button2 span[data-v-3ebbfa05] { cursor: pointer; display: inline-block; position: relative; transition: 0.5s; } .button2 span[data-v-3ebbfa05]:after { content: '>>'; position: absolute; opacity: 0; top: 0; right: -20px; transition: 0.5s; } .button2:hover span[data-v-3ebbfa05] { padding-right: 30px; } .button2:hover span[data-v-3ebbfa05]:after { opacity: 1; right: 0; } .button3[data-v-3ebbfa05] { display: inline-block; border-radius: 10px; border: none; color: #FFFFFF; text-align: center; font-size: 21px; padding: 10px; width: 130px; transition: all 0.5s; cursor: pointer; margin: 5px; outline:none; } .button3 span[data-v-3ebbfa05] { cursor: pointer; display: inline-block; position: relative; transition: 0.5s; } .button3 span[data-v-3ebbfa05]:after { content: '√'; position: absolute; opacity: 0; top: 0; right: -20px; transition: 0.5s; } .button3:hover span[data-v-3ebbfa05] { padding-right: 15px; } .button3:hover span[data-v-3ebbfa05]:after { opacity: 1; right: 0; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();































var VueComments = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main",style:({background: _vm.backgroundColor,marginTop: _vm.margintop + 'px'})},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.comtent),expression:"comtent"}],staticClass:"text",style:({borderColor: _vm.mainColor}),attrs:{"placeholder":"评论一下吧!","maxlength":"200"},domProps:{"value":(_vm.comtent)},on:{"input":function($event){if($event.target.composing){ return; }_vm.comtent=$event.target.value;}}}),_vm._v(" "),_c('div',{staticClass:"er1",style:({borderColor: _vm.mainColor})},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticStyle:{"line-height":"10px","margin-right":"50px","color":"red"}},[_vm._v("请输入评论")]),_vm._v(" "),_c('p',{staticStyle:{"line-height":"10px","margin-right":"50px"}},[_vm._v("还可以输入"),_c('span',{style:({color:_vm.mainColor})},[_vm._v(_vm._s(_vm.count))]),_vm._v("字")]),_vm._v(" "),_c('button',{staticClass:"button3",style:({backgroundColor: _vm.mainColor}),on:{"click":function($event){$event.stopPropagation();return _vm.comment($event)}}},[_c('span',[_vm._v("发布评论")])])]),_vm._v(" "),_vm._l((_vm.pageData),function(item,index){return _c('div',{key:index,staticClass:"er2",style:({marginTop:'15px',borderColor: _vm.mainColor})},[_c('div',{staticClass:"xwcms",style:(_vm._f("avatar")(item.avatar))}),_vm._v(" "),_c('div',{staticStyle:{"width":"150px","flex-shrink":"0"}},[_c('p',[_vm._v(" "+_vm._s(item.name)+" ")]),_vm._v(" "),_c('p',[_vm._v(" "+_vm._s(_vm._f("time")(item.createdAt))+" ")])]),_vm._v(" "),_c('div',[_c('p',{staticClass:"text3"},[_vm._v(" "+_vm._s(item.moment)+" ")])])])}),_vm._v(" "),_c('div',{staticStyle:{"height":"20px"}}),_vm._v(" "),(_vm.more)?_c('div',{staticStyle:{"height":"70px"}},[_c('button',{staticClass:"button2",style:({backgroundColor: _vm.mainColor}),on:{"click":_vm.moreData}},[_c('span',[_vm._v("加载更多 ")])])]):_vm._e()],2)},staticRenderFns: [],_scopeId: 'data-v-3ebbfa05',
  name: 'VueCommentList',
  data: function data () {
    return {
      dis: true,
      num: 1,
      show1: false,
      comtent: ''
    }
  },
  props: {
    margintop: {
      type: Number,
      default: 20,
      validator: function (value) {
        return value >= 0
      }
    },
    mainColor: {
      type: String,
      default: '#409EFF'
    },
    backgroundColor: {
      type: String,
      default: '#efefef'
    },
    worldCount: {
      type: Number,
      default: 200,
      validator: function (value) {
        return value > 0
      }
    },
    allCount: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0
      }
    },
    pageSize: {
      type: Number,
      default: 10,
      validator: function (value) {
        return value > 0
      }
    },
    pageData: {
      type: Array,
      default: function default$1 () {
        return []
      }
    },
    nextPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    more: function more () {
      if (this.allCount > 0) {
        return Math.ceil(this.allCount / this.pageSize) > 1 && this.allCount !== this.pageData.length
      } else {
        return this.nextPage
      }
    },
    count: function count () {
      return this.worldCount - this.comtent.length
    },
    show: function show () {
      if (this.comtent) {
        return false
      }
      return this.show1
    }
  },
  watch: {
    pageData: function (curVal, oldVal) {
      this.comtent = '';
      this.dis = true;
    }
  },
  components: {
  },
  methods: {
    moreData: function moreData () {
      if (this.dis) {
        this.num = this.num + 1;
        this.dis = false;
        this.$emit('moreData', this.num);
      }
    },
    comment: function comment () {
      if (!this.comtent) {
        this.show1 = true;
        return false
      }
      this.$emit('submit', this.comtent);
    }
  },
  mounted: function mounted () {
  },
  filters: {
    time: function (value) {
      var date = new Date(value);
      return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
    },
    avatar: function (value) {
      return {'background': 'url(' + value + ') no-repeat left top'}
    }
  }
}

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('comments', VueComments);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default VueComments;
export { install };
