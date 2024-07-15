<script lang="ts">
import { StreamingService } from '@/views/streaming.service';
import { Streamings } from '@/models/streaming.model';

export default {
    data() {
        return {
            films: new Array<Streamings>(),
            page: 1
        }
    },
    mounted() {
        this.getMovies()
    },
    computed: {
        movieService(): StreamingService {
            return new StreamingService();
        }
    },
    methods: {
        getMovies(page?: number) {
            this.movieService.streamings
                .subscribe({
                    next: (response: any) => {
                        this.films = response.results;
                    }
                });
            this.movieService.getMovies(page);
        },
        nextPage(last?: boolean) {
            if (last === true) {
                this.page = 500
                this.getMovies(this.page);
            } else {
                if (this.page < 500) {
                    this.page++;
                    this.getMovies(this.page);
                }
            }
        },
        backPage(first?: boolean) {
            if (first === true) {
                this.page = 1
                this.getMovies(this.page);
            } else {
                if (this.page > 1) {
                    this.page--;
                    this.getMovies(this.page);
                }
            }
        }
    },
}
</script>

<template>
    <body>
        <structure-pages/>
    </body>
</template>
