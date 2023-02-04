import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 1. Import the components you need from vant
import { Button, Space } from 'vant';
// 2. Import the components style of vant
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

//import './assets/main.css'

const app = createApp(App)

app.use(Button)
app.use(Space)
app.use(createPinia())
app.use(router)

app.mount('#app')
