import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import etc from '../src/views/2_EventListenal/EventKeyView.vue'

createApp(App).use(store).use(router).mount('#app')
createApp('etc', etc)
