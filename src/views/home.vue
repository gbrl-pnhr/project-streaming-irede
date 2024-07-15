<script lang="ts">
import { StreamingService } from '@/services/streaming.service';

export default {
    data() {
        return {
            all: new Array <StreamingService> (),
        }
    },
    mounted() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.service.streamings.subscribe({ next: (response: any) => this.all = response.results });
            this.service.getAll();
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
    <body>
        <structure-pages :url="all"/>
    </body>
</template>
