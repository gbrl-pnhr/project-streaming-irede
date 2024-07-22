import { reactive } from "vue";
import { BehaviorSubject } from "rxjs";
import type { Streamings } from "@/models/streaming.model";

export class FavoritesService {
    private favorites$ = new BehaviorSubject<Streamings[]>([]);
    public favorites = reactive({
        list: [] as Streamings[],
    });

    constructor() {
        this.initializeFavorites();
        this.favorites$.subscribe((favorites) => {
            this.favorites.list = favorites;
            localStorage.setItem("favorites", JSON.stringify(favorites));
        });
    }

    private initializeFavorites() {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            this.favorites$.next(JSON.parse(storedFavorites));
        }
    }

    public addFavorite(item: Streamings) {
        if (!this.favorites.list.some(
            fav => fav.id === item.id && fav.media_type === item.media_type
        )) {
            this.favorites$.next([...this.favorites.list, item]);
        }
    }

    public removeFavorite(item: Streamings) {
        this.favorites$.next(this.favorites.list
            .filter(
                favorite =>
                    favorite.id !== item.id || favorite.media_type !== item.media_type
            )
        );
    }

    public clearFavorites() {
        this.favorites$.next([]);
        localStorage.removeItem("favorites");
    }
}