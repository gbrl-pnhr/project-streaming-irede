import type { Streamings } from "@/models/streaming.model"
import { Observable } from "rxjs"

export class FavoriteStorage {

    constructor(public _listFavorite = new Array<Streamings>()) { }

    public favorite$: Observable<any> = new Observable<any>();

    setFavorite(item: Streamings) {
        if (this._listFavorite.length > 0) {
            this._listFavorite.concat(item)
            console.log("lista de favoritos")
            console.log(this._listFavorite)
        } else {
            console.log("ta cheio")
            this._listFavorite.push(item)
        }
    }
}