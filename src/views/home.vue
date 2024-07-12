<script lang="ts">
import { StreamingService } from '@/services/streaming.service';

export default {
    data() {
        return {
            all: new Array < StreamingService > (),
            count: 1,
        }
    },
    mounted() {
        this.getAll();
    },
    methods: {
        getAll(page?: number) {
            this.service.streamings.subscribe({ next: (response: any) => this.all = response.results });
            this.service.getAll(page);
        }
    },
    computed: {
        service(): StreamingService {
            return new StreamingService();
        }
    },
}
</script>

<template>
    <body v-for="index in all">
        <structure-pages :url="index"/>
    </body>
</template>
