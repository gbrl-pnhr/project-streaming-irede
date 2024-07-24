<script lang="ts">
import router from '@/router';

export default {
    props: {
        tipePageRecive: {
            type: String,
            required: true
        },
        pageFather: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            page: this.pageFather,
        }
    },
    watch: {
        pageFather (newValuePage) {
            this.page = newValuePage;
        }
    },
    methods: {
        passPage() {
            if (this.page < 500) {
                this.page++;
                this.windowScroll()
                this.$emit('new-value', this.page)
            }
        },
        backPage() {
            if (this.page > 1) {
                this.page--;
                this.windowScroll()
                this.$emit('new-value', this.page)
            }
        },
        windowScroll() {
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
            <Button class="m-3 px-3 py-2 border rounded-lg hover:text-blue-500 hover:bg-white" @click="backPage()">Anterior</Button>
            <p class="inline">{{ page }} de 500</p>
            <Button class="m-3 px-3 py-2 border rounded-lg hover:text-blue-500 hover:bg-white" @click="passPage()">Próximo</Button>
        </RouterLink>
    </div>
</template>
