export class Streamings {
    constructor(
        public adult?: boolean,
        public backdrop_path?: string,
        public id?: number,
        public name?: string,
        public title?: string, 
        public overview?: string,
        public poster_path?: string,
        public media_type?: string,
        public genre_ids?: number[],
        public popularity?: number,
        public release_date?: string,
        public first_air_date?: string,
        public videos?: Videos[],
        public runtime?: number,
        public number_of_episodes?: number,
        public number_of_seasons?: number,
    ) {}
}

class Videos {
    constructor(
        public results?: [
            {
                name_video?: string,
                key?: string,
                type?: string,
            }
        ]
    ) {}
}