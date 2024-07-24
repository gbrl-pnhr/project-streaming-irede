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

    public addFavorite(streaming: Streamings) {
        if (!this.favorites.list.some(
            favorite => favorite.id === streaming.id && favorite.media_type === streaming.media_type
        )) {
            this.favorites$.next([...this.favorites.list, streaming]);
        }
    }

    public removeFavorite(streaming: Streamings) {
        this.favorites$.next(this.favorites.list
            .filter(
                favorite =>
                    favorite.id !== streaming.id || favorite.media_type !== streaming.media_type
            )
        );
    }

    public clearFavorites() {
        this.favorites$.next([]);
        localStorage.removeItem("favorites");
    }

    public getFavorite(id:number, media:string): boolean{
        let hasFavorite:boolean = false
        this.favorites.list.forEach(item => {
          if (item.id === id && item.media_type === media) {
            hasFavorite = true
          }          
        })        
        return hasFavorite
      }
}