<script lang="ts">
import { StreamingService } from '@/views/streaming.service';
import router from '@/router';

export default {
    data() {
        return {
            streamings: new Array < StreamingService > (),
            page: Number(router.currentRoute.value.params.page)
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
        updatePage(novoValor: number) {
            this.page = novoValor;
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
        <structure-pages :streamingPosters = "streamings" />
        <pagination @new-value = "updatePage"/>
    </body>
</template>