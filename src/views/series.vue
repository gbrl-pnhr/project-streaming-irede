<script lang="ts">
import { StreamingService } from './streaming.service';
import { Streamings } from '../models/streaming.model';

export default {
    data() {
        return {
            series: new Array<Streamings>(),
            page: Number(this.$route.params.page),
            typePage: 'series'
        }
    },
    watch: {
        '$route.params.page'(newValuePage) {
            this.page = Number(newValuePage);
            this.getSeries(this.page);
        }
    },
    mounted() {
        this.getSeries()
    },
    computed: {
        serieService(): StreamingService {
            return new StreamingService();
        }
    },
    methods: {
        getSeries(page?: number) {
            this.serieService.streamings
                .subscribe({
                    next: (response: any) => {
                        this.series = response.results;
                    }
                });
            this.serieService.getSeries(page);
        },
        updatePage(newValuePage: number) {
            this.page = newValuePage;
        },
    },
}
</script>

<template>

    <body>
        <structure-pages :streamingPosters="series" :pageCurrent="page" />
        <pagination :tipePageRecive='typePage' :pageFather="page" @new-value="updatePage" />
    </body>
</template>
