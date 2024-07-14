import { RiHeartFill, RiHeartAddLine, HiMenu } from "oh-vue-icons/icons";
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { setComponent } from './modules/component.module';
import { createApp } from 'vue'
import ToggleSwitch from 'primevue/toggleswitch';
import PrimeVue from 'primevue/config'
import Button from 'primevue/button';
import router from './router'
import Image from 'primevue/image';
import Card from 'primevue/card';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import { Theme } from "@primevue/themes";

addIcons(RiHeartFill, RiHeartAddLine, HiMenu);

const app = createApp(App);
setComponent(app);
app.use(PrimeVue, { unstyled: true });
app.use(router);
app.component("v-icon", OhVueIcon);
app.component("Button", Button);
app.component("Card", Card);
app.component("ToggleSwitch", ToggleSwitch);
app.component("Image", Image);
app.mount('#app');
