import Vue from 'vue'
import App from './App.vue'
import "prismjs"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles.scss'

new Vue({
  render: h => h(App)
}).$mount('#app');