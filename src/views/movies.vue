<script lang="ts">
import { StreamingService } from '@/views/streaming.service';
import { Streamings } from '@/models/streaming.model';

export default {
    data() {
        return {
            films: new Array<Streamings>(),
        }
    },
    created() {
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
    },
}
</script>

<template>
    <body>
        <structure-pages/>
    </body>
</template>
