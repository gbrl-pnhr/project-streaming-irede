import '@/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { RiHeartFill, RiHeartAddLine } from "oh-vue-icons/icons";

addIcons(RiHeartFill, RiHeartAddLine);

const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(router)
app.mount('#app')
