import type { App } from "vue";
import Button from 'primevue/button';

export function setComponentPrime(app: App) {
    app.component("Button", Button);
}