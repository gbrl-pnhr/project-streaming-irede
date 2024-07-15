export class Streamings {
    constructor(
        public adult?: boolean,
        public backdrop_path?: string,
        public id?: number,
        public name?: string, // series
        public title?: string, // filmes
        public overview?: string,
        public poster_path?: string,
        public media_type?: string,
        public genre_ids?: number[],
        public popularity?: number,
        public release_date?: string, // filmes
        public first_air_date?: string, // series
        public videos?: Videos[]
    ) {}
}

class Videos {
    constructor(
        public name_video?: string,
        public key?: string,
        public size?: 360,
        public type?: string,
    ) {}
}