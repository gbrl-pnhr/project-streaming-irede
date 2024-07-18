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
    methods: {

        passPage() {
            if (this.page < 500) {
                this.page++;
                this.$emit('pass-page')
            }
        },
        backPage() {
            if (this.page > 1) {
                this.page--;
                this.$emit('back-page')
            }
        },
        sendPage() {
            const newValuePage = this.page;
            this.$emit('new-value', newValuePage);
        }
    },
    computed: {
        service(): StreamingService {
            return new StreamingService();
        },
    },
}
</script>

<template>
    <div class="text-center bg-gray-800 text-white p-5 flex justify-center">
        <RouterLink :to="`/${ page }`">
            <Button class="m-3 px-3 py-2 border rounded-lg hover:text-blue-900 hover:bg-white" @click="backPage(), sendPage()">Anterior</Button>
            <p class="inline">{{ page }} de 500</p>
            <Button class="m-3 px-3 py-2 border rounded-lg hover:text-blue-500 hover:bg-white" @click="passPage(), sendPage()">Próximo</Button>
        </RouterLink>
    </div>
</template>
