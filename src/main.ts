import '@/assets/font/font.less';
import '@/style/index.less';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import './permission';
import router from './router';

const app = createApp(App)

app.use(ElementPlus)
    .use(router);
app.mount('#app')
