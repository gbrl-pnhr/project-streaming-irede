<script lang="ts">
import { StreamingService } from './streaming.service';
import { Streamings } from '../models/streaming.model';
import router from '@/router';

export default {
    data() {
        return {
            series: new Array<Streamings>(),
            page: Number(router.currentRoute.value.params.page),
            typePage: 'series'
        }
    },
    mounted() {    
        this.getSeries()
    },
    updated() {
        this.getSeries(this.page);
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
        <structure-pages :streamingPosters="series" :pageCurrent="page"/>
        <pagination :tipePageRecive = 'typePage' @new-value="updatePage"/>
    </body>
</template>

