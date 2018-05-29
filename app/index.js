import Vue from 'vue'
import App from './App'
import 'babel-polyfill';

new Vue({
  el: '#app',
  components: { App },
  data: {
    hello: "こんにちは世界"
  }
})
