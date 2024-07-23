<script lang="ts">
import { StreamingService } from '@/views/streaming.service';
import { Streamings } from '@/models/streaming.model';
import router from '@/router';

export default {
    data() {
        return {
            films: new Array<Streamings>(),
            page: Number(router.currentRoute.value.params.page),
            typePage: 'movies'
        }
    },
    updated() {
        this.getMovies(this.page);
    },
    mounted() {
        this.getMovies(this.page)
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
        updatePage(newValuePage: number) {
            this.page = newValuePage;
        },
    },
}
</script>

<template>
    <body>
        <structure-pages :streamingPosters="films" :isButtonVisible="false" />
        <pagination :tipePageRecive='typePage' @new-value="updatePage" />
    </body>
</template>
