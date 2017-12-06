# vue-standard

> A Vue.js project

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

# 实现
  lang 后端请求（需要跟后端定义文件名）、默认设置
  config
  service
  router
  store
  引入normalize.css
# 遇到问题
1、this.Logger.log() 会在打包的时候出现很多空函数 function() {}
2、引用方式不一致 this.Logger.log() utils.Logger.log()
3、关于ajax请求语言包的形式，先赋值默认，而后覆盖还是？
