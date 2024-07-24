<script lang="ts">
import { StreamingService } from '@/views/streaming.service';
import { Streamings } from '@/models/streaming.model';
import router from '@/router';

export default {
    data() {
        return {
            films: new Array<Streamings>(),
            page: Number(this.$route.params.page),
            typePage: 'movies'
        }
    },
    watch: {
        '$route.params.page'(newValuePage) {
            this.page = Number(newValuePage);
            this.getMovies(this.page);
        }
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
        <pagination :tipePageRecive='typePage' :pageFather="page" @new-value="updatePage" />
    </body>
</template>
