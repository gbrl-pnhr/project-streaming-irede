import type { App } from "vue";
import NavBar from "@/components/NavBar/nav-bar.vue";
import StructurePages from "@/components/StructurePages/structure-pages.vue"
import CardPoster from "@/components/CardPoster/card-poster.vue"

export function setComponent(app: App) {
    app.component("nav-bar", NavBar);
    app.component("structure-pages", StructurePages);
    app.component("card-poster", CardPoster);
}