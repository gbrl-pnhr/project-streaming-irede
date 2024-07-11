import { BehaviorSubject, Observable, take } from "rxjs";
import { StreamingRest } from "./rest/streaming.rest";

export class StreamingService {
    constructor(private _streamings = new StreamingRest()) {}

    private streamings$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    streamings: Observable<any> = this.streamings$.asObservable();

    getStreamings(endpoint: string) {
        this._streamings.getStreamings(endpoint)
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.streamings$.next(response);
                    console.log("Foi possível recuperear os dados");
                    console.log(response.results);
                },
                error: () => {
                    alert("Não foi possível recuperar os dados");
                }
            });
    }
}