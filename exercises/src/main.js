import Vue from 'vue'
import App from './App.vue'

export const serverBus = new Vue();
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
