<script lang="ts">
import { StreamingService } from '@/views/streaming.service';

export default {
    data() {
        return {
            streamings: new Array <StreamingService> (),
        }
    },
    mounted() {
        this.getStreamings();
    },
    methods: {
        getStreamings() {
            this.service.streamings.subscribe({ next: (response: any) => this.streamings = response.results });
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
        <structure-pages :streamingPosters="streamings"/>
    </body>
</template>
