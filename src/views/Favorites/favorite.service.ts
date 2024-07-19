import { reactive } from "vue";
import { BehaviorSubject } from "rxjs";

export class FavoritesService {
    private favorites$ = new BehaviorSubject<Object[]>([]);
    public favorites = reactive({
        list: [] as Object[],
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

    public addFavorite(item: Object) {
        if (!this.favorites.list.includes(item)) {
            this.favorites$.next([...this.favorites.list, item]);
        }
    }

    public removeFavorite(item: Object) {
        this.favorites$.next(this.favorites.list.filter((favorite) => favorite !== item));
    }

    public clearFavorites() {
        this.favorites$.next([]);
        localStorage.removeItem("favorites");
    }
}