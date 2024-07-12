import { BehaviorSubject, Observable, take } from "rxjs";
import { StreamingRest } from "./rest/streaming.rest";

export class StreamingService {
    constructor(private _streamings = new StreamingRest()) {}

    private streamings$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    streamings: Observable<any> = this.streamings$.asObservable();

    getAll(page?: number) {
        this._streamings.getAll(page)
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.streamings$.next(response);
                    console.log(response.results);
                },
                error: () => {
                    alert("Não foi possível recuperar os dados das Series e Filmes");
                }
            });
    }

    getMovies(page?: number) {
        this._streamings.getMovies(page)
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.streamings$.next(response);
                    console.log(response.results);
                },
                error: () => {
                    alert("Não foi possível recuperar os dados dos Filmes");
                }
            });
    }

    getSeries(page?: number) {
        this._streamings.getSeries(page)
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.streamings$.next(response);
                    console.log(response.results);
                },
                error: () => {
                    alert("Não foi possível recuperar os dados das Series");
                }
            });
    }

    getTrailer(id: number, mediaType: string) {
        this._streamings.getTrailer(id, mediaType)
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.streamings$.next(response);
                    console.log(response.results);
                },
                error: () => {
                    alert("Não foi possível recuperar o Trailer");
                }
            });
    }
}