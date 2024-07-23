<script lang="ts">
import router from '@/router';

export default {
    data() {
        return {
            page: Number(router.currentRoute.value.params.page),
        }
    },
    props: {
        tipePageRecive: {
            type: String,
            required: true
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
        },
        windowScroll(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>

<template>
    <div class="text-center bg-gray-800 text-white p-5 flex justify-center">
        <RouterLink :to="`/${ tipePageRecive }/${ page }`">
            <Button class="m-3 px-3 py-2 border rounded-lg hover:text-blue-500 hover:bg-white" @click="backPage(), sendPage(), windowScroll()">Anterior</Button>
            <p class="inline">{{ page }} de 500</p>
            <Button class="m-3 px-3 py-2 border rounded-lg hover:text-blue-500 hover:bg-white" @click="passPage(), sendPage(), windowScroll()">Próximo</Button>
        </RouterLink>
    </div>
</template>
