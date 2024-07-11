import api from "../api-Config/rxjs-config";

export class StreamingRest {
    getStreamings(endpoint: string) {
        return api.get(`${endpoint}`);
    }
}