import type { App } from "vue";
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { RiHeartFill, HiMenu, FaHeartBroken } from "oh-vue-icons/icons";

addIcons(RiHeartFill, HiMenu, FaHeartBroken);

export function setComponentIcons(app: App) {
    app.component("v-icon", OhVueIcon);
}