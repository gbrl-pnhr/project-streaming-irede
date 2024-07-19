<script lang="ts">
import { StreamingService } from '@/views/streaming.service';
import router from '@/router';
import type { Streamings } from '@/models/streaming.model';

export default {
    data() {
        return {
            streamings: new Array <Streamings> (),
            page: Number(router.currentRoute.value.params.page),
            tipePage: 'home'
        }
    },
    updated() {
        this.getStreamings(this.page);
    },
    mounted() {
        this.getStreamings(this.page);
    },
    methods: {
        getStreamings(page?: number) {
            this.service.streamings.subscribe({ next: (response: any) => this.streamings = response.results });
            this.service.getAll(page);
        },
        updatePage(newValuePage: number) {
            this.page = newValuePage;
        },
    },
    computed: {
        service(): StreamingService {
            return new StreamingService();
        }
    }
}
</script>

<template>
    <body>
        <structure-pages :streamingPosters="streamings"/>
        <pagination :tipePageRecive = 'tipePage' @new-value="updatePage"/>
    </body>
</template>