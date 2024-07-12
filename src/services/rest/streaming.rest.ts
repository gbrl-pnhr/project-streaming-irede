import api from "../api-Config/rxjs-config";

export class StreamingRest {
    getAll(page?: number, endpoint = `/all/day?page=${ page || 1 }&language=pt-BR`) {
        return api.get(`${ endpoint }`);
    }

    getMovies(page?: number, endpoint = `/movie/day?page=${ page || 1 }&language=pt-BR`) {
        return api.get(`${ endpoint }`);
    }

    getSeries(page?: number, endpoint = `/tv/day?page=${ page || 1 }&language=pt-BR`) {
        return api.get(`${ endpoint }`);
    }
}