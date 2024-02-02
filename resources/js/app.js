import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue'
import router from './route.js'

createApp(App).use(router).mount('#app')