import './assets/main.css'
//bootstrap樣式
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
//引入ElementUI組件庫
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
//應用Bootstrap
app.use(bootstrap)
//應用ElementUI
app.use(ElementPlus)

app.use(router)

app.mount('#app')

const vm = Vue.creatApp({
  data(){
    return{
      commodity1:''
    }
  }
}).mount('#app');