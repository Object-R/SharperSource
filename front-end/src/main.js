import './assets/css/global.css'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from "vue-axios";
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(VueAxios, axios)
app.mount('#app')
