// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入自己写的scss
import './assets/reset.scss'
//引用第三方的css 需要下载比如npm i -S normalize.css
import 'normalize.css'
//引入饿了么ul npm i element-ui -S
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

//全局组件，在初始化之前注册一个
//Vue.component('Jack', {
//        template: '<p>I am Jack</p>',
//        data() {
//            return {
//               name: 'Jack Ma'
//            }
//        }
//    })
//全局组件第二种方法
//import Hello from './components/Hello.vue'
//Vue.component('Hello', Hello)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})