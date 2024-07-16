<script lang="ts">
import { StreamingService } from '@/views/streaming.service';

export default {
    data() {
        return {
            streamings: new Array < StreamingService > (),
            page: 1
        }
    },
    updated() {
        this.getStreamings(this.page);
    },
    mounted() {
        this.getStreamings(this.page);
    },
    methods: {
        getStreamings(page: number) {
            this.service.streamings.subscribe({ next: (response: any) => this.streamings = response.results });
            this.service.getAll(page);
        },
        passPage() {
            if (this.page < 500) {
                this.page += 1;
            }
        },
        backPage() {
            if (this.page > 1) {
                this.page -= 1;
            }
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
        <structure-pages :streamingPosters="streamings" />
        <div class="text-center bg-gray-800 text-white">
            <Button class="m-3" @click="backPage()">Anterior</Button>
            <Button @click="passPage()">Próximo</Button>
        </div>
    </body>
</template>