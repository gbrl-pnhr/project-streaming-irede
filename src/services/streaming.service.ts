import { BehaviorSubject, Observable, take } from "rxjs";
import { StreamingRest } from "./rest/streaming.rest";

export class StreamingService {
    constructor(private _streamings = new StreamingRest()) {}

    private streamings$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    streamings: Observable<any> = this.streamings$.asObservable();

    getAll() {
        this._streamings.getAll()
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.streamings$.next(response);
                    console.log(response.results);
                },
                error: () => {
                    alert("Não foi possível recuperar os dados");
                }
            });
    }

    getMovies() {
        this._streamings.getMovies()
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.streamings$.next(response);
                    console.log(response.results);
                },
                error: () => {
                    alert("Não foi possível recuperar os dados");
                }
            });
    }

    getSeries() {
        this._streamings.getSeries()
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.streamings$.next(response);
                    console.log(response.results);
                },
                error: () => {
                    alert("Não foi possível recuperar os dados");
                }
            });
    }
}