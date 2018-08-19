<template>
  <div class="main"  :style="{background: backgroundColor,marginTop: margintop + 'px'}">
      <textarea  class="text"  :style="{borderColor: mainColor}" v-model="comtent" placeholder="评论一下吧!" maxlength="200">
      </textarea>
      <div class="er1" :style="{borderColor: mainColor}">
        <p style="line-height:10px;margin-right:50px;color:red;" v-show="show">请输入评论</p>
        <p style="line-height:10px;margin-right:50px;">还可以输入<span :style="{color:mainColor}">{{count}}</span>字</p>
        <button class="button3" :style="{backgroundColor: mainColor}" @click.stop="comment"><span>发布评论</span></button>
      </div>
      <div v-for="(item,index) in pageData" :key="index" class="er2" :style="{marginTop:'15px',borderColor: mainColor}">
          <div class="xwcms" :style="item.avatar | avatar"></div>
          <div style="width:150px;flex-shrink:0;">
            <p>
              {{item.name}}
            </p>
            <p>
              {{item.createdAt | time}}
            </p>
          </div>
          <div>
            <p class="text3">
              {{item.moment}}
            </p>
          </div>
      </div>
      <div style="height:20px;"></div>
      <div style="margin-bottom：15px;height:70px;" v-if="more">
        <button class="button2" :style="{backgroundColor: mainColor}" @click="moreData"><span>加载更多 </span></button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'VueCommentList',
  data () {
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
      default () {
        return []
      }
    },
    nextPage: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    more () {
      if (this.allCount > 0) {
        return Math.ceil(this.allCount / this.pageSize) > 1 && this.allCount !== this.pageData.length
      } else {
        return this.nextPage
      }
    },
    count () {
      return this.worldCount - this.comtent.length
    },
    show () {
      if (this.comtent) {
        return false
      }
      return this.show1
    }
  },
  watch: {
    pageData: function (curVal, oldVal) {
      this.comtent = ''
      this.dis = true
    }
  },
  components: {
  },
  methods: {
    moreData () {
      if (this.dis) {
        this.num = this.num + 1
        this.dis = false
        this.$emit('moreData', this.num)
      }
    },
    comment () {
      if (!this.comtent) {
        this.show1 = true
        return false
      }
      this.$emit('submit', this.comtent)
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .main {
     max-width:1200px;
     margin:auto;
     text-align:center;
   }
  .xwcms {
    flex-shrink: 0;
    margin-left: 10px;
    width: 100px;
    height: 100px;
    /* margin: 0 auto; */
    /* background: no-repeat url("../../static/images/123.png") left top; */
    -webkit-background-size: 100px 100px;
    -moz-background-size: 100px 100px;
    background-size: 100px 100px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    -webkit-transition: -webkit-transform 2s ease-out;
    -moz-transition: -moz-transform 2s ease-out;
    -o-transition: -o-transform 2s ease-out;
    -ms-transition: -ms-transform 2s ease-out;
  }
  .xwcms:hover {
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
  .er1 {
  width: 100%;
  display: flex;
  display: -webkit-flex; /* Safari */
  display: flex;
  justify-content:flex-end;
  align-items: center;
  border: 1px solid;
  border-radius:6px;
  height: 42px;
  margin: auto;
}
  .er2{
  width: 100%;
  display: flex;
  display: -webkit-flex; /* Safari */
  display: flex;
  /* justify-content:flex-end; */
  align-items: center;
  border: 1px solid;
  border-radius:6px;
  height: 100px;
  margin: auto;
  background-color: white;
}
textarea{outline:none}
.text {
  text-indent:34px;
  border-style:none;
  margin:0;
  padding:0;
  width: 100%;
  resize:none;
  height: 76px;
  border:solid 1px;
  border-radius:6px;
  word-break:break-all;
  word-wrap: break-word;
  line-height: 24px;
  margin-bottom:15px;
}
.text3 {
word-break:normal;
white-space:pre-warp;
word-wrap:break-word;
text-indent:2em;
text-align:left;
}

.button2 {
  display: inline-block;
  border-radius: 4px;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 12px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button2 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button2 span:after {
  content: '>>';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button2:hover span {
  padding-right: 30px;
}

.button2:hover span:after {
  opacity: 1;
  right: 0;
}
.button3 {
  display: inline-block;
  border-radius: 10px;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 21px;
  padding: 10px;
  width: 130px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  outline:none;
}

.button3 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button3 span:after {
  content: '√';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button3:hover span {
  padding-right: 15px;
}

.button3:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
