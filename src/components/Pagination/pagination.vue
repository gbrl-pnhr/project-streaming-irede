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
        reloadPage() {
            setTimeout(() => { 
                window.location.reload();
             }, 500);
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
        <div class="text-center bg-gray-800 text-white p-5 items-center">
            <RouterLink :to="`/${ page }`">
                <p>
                    <Button class="m-3 items-center px-3 py-2 border rounded-lg hover:text-blue-900 hover:bg-white" @click = "backPage()">Anterior</Button> {{ page }} de 500<Button class="m-3 items-center px-3 py-2 border rounded-lg hover:text-blue-500 hover:bg-white" @click = "passPage()">Próximo</Button>
                </p>
            </RouterLink>
            <p>{{ page }}</p>
        </div>
</template>