import Vue from 'vue'
import App from './App'
import axios from 'axios';
import 'babel-polyfill';

new Vue({
  el: '#app',
  components: { App },
  data: {
    hello: "こんにちは世界"
  }
})

function post() {
  axios({
    method  : 'POST',
    url     : 'https://gateway.watsonplatform.net/language-translator/api/v2/translate',
    withCredentials: true, //BASIC認証を通すため
    auth    : {
      username : '8ac2b58e-5476-4771-a9a3-d6fcf6e3379a',
      password : 'KZnC4Nlxz243'
    },
    headers : {
      "Access-Control-Allow-Credentials":"true",
      "Access-Control-Allow-Origin": "http://localhost:8080/",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    },
    data    : {
      text: 'こんにちは',  // ここが翻訳したいテキスト情報
      source: 'ja',       // 翻訳前の言語（今回は日本語から英語のためjaを指定）
      target: 'en'
    }
  })
  .then(response => console.log(response.status))
  .catch( error => { console.log(error); });;
};

post();
