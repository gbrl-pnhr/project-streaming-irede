<script lang="ts">
import { StreamingService } from './streaming.service';
import { Streamings } from '../models/streaming.model';

export default {
    data() {
        return {
            series: new Array<Streamings>(),
            page: 0
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
    },
}
</script>

<template>
    <body>                                  
        <structure-pages :streamingPosters="series" :pageCurrent="page"/>
    </body>
</template>

