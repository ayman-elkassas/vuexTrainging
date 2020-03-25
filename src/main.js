import Vue from 'vue'
import App from "./assets/Components/App/App.vue";
import {store} from "./assets/Store/store.js";

new Vue({
  el: '#app',
  render: h => h(App),
  store:store
});
