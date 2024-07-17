<script lang="ts">
import { StreamingService } from '@/views/streaming.service';
import router from '@/router';
import Pagination from '@/components/Pagination/pagination.vue';

export default {
    data() {
        return {
            streamings: new Array < StreamingService > (),
            page: Number(router.currentRoute.value.params.page)
        }
    },
    components:{
        Pagination
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
        // passPage() {
        //     if (this.page < 500) {
        //         this.page++;
        //     }
        // },
        // backPage() {
        //     if (this.page > 1) {
        //         this.page--;
        //     }
        // }
    },
    computed: {
        service(): StreamingService {
            return new StreamingService();
        },
    },
}
</script>

<template>
    <body>
        {{ page }}
        <structure-pages :streamingPosters="streamings" />
        <Pagination />
        <!-- <div class="text-center bg-gray-800 text-white p-5 items-center">
            <RouterLink :to="`/${ page }`">
                <p>
                    <Button class="m-3 items-center px-3 py-2 border rounded-lg hover:text-blue-900 hover:bg-white" @click="backPage()">Anterior</Button> {{ page }} de 500<Button class="m-3 items-center px-3 py-2 border rounded-lg hover:text-blue-500 hover:bg-white" @click="passPage()">Próximo</Button>
                </p>
            </RouterLink>
        </div> -->
    </body>
</template>