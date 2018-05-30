import Vue from 'vue'
import App from './App'
import 'babel-polyfill';
import axios from 'axios';

new Vue({
  el: '#app',
  components: { App },
  watch: {
    // val = 新しい入力値
    // oldVal = 古い入力値
    text: function (val) {
      axios
      .get('/api/'+ val)
      .then(response => (this.text_translate = response))
    }
  },
  data: {
    pref: "",
    text: "",
    text_translate : "",
  }
})
