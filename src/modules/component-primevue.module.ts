import type { App } from "vue";
import Button from 'primevue/button';

export function setComponent(app: App) {
    app.component("Button", Button);
}