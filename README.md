## 安装

### Node

```
$ npm install vue-comments --save

```

## 运行时要求

vue2.x

## 使用


```JS

import Comments from 'vue-comments'

Vue.use(Comments)

```
or作为组件引入

```js

import Comments from 'vue-comments'

<comments></comments>

export default {
  data () {
    return {}
  },
  components {
    Comments
  }
}

```
or CDN

```js
<script src="https://unpkg.com/vue-comments@1.0.4/dist/vue-comments.min.js"></script>

 Vue.use(Comments)

```

如:
```HTML

<comments :pageData="pageData" :mainColor="color" :allCount="allCount" @submit="submit" @moreData="moreData" :pageSize="pageSize" :nextPage="nextPage"></comments>

```

# vue-comments

> a vue component which comment and a list comments 一个关于评论及评论列表的组件

### props
| 名称 | 类型 | 默认值 | 说明 |
| ---- | ---- | ------- | ----------- |
| margintop| Number | 20 | margin-top:20px  距离上边的距离 大于0 |
| mainColor | String | `'#409EFF'` | 当前组件的主要颜色如边框颜色、字体、背景|
| backgroundColor | String |`'#409EFF'` | 整个组件的背景颜色 |
| worldCount | Number | `200` | 输入评论的字数 |
| allCount | Number | `0` | 评论列表中 评论总条数 pageSize 和allCount有一个就可以  |
| pageSize | Number | `10` | 分页 每页的条数 必须有 |
| nextPage | Boolean | `false` | 是否有下一页, pageSize 和allCount有一个就可以 |
| pageData | Array | `[]` | 评论列表是list，里边是个对象如{name:'张三',moment:'评论内容',avatar: '头像路径100*100 大小',createdAt: '评论时间 2018-08-18 19:58:47'} |

### event
| 事件名称  |  说明 |
| ---- | ----------- |
| submit| 当点击发布评论的时候,组件会触发submit事件通知父组件,会把评论的内容传给父组件|
|moreData| 当点击加载更多的时候，组件会触发moreData事件通知父组件，会把要获取评论的页数传给父组件|

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
