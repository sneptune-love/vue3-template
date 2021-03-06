import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/index.less'

import { Button } from 'vant'

import xfHeader from './components/xfHeader.vue'

const app = createApp(App)

app.component('XfHeader', xfHeader)

app.use(Button)

app.use(store).use(router).mount('#app')
