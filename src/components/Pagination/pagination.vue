<script lang="ts">
    export default {
        props: {
            page: Number
        },

        emits: ['page'],

        created() {
            this.$emit('page', '1')
        },

        methods: {
            passPage() {
                if(this.page < 500) {
                    this.page += 1;
                }
            },
            backPage() {
                if(this.page > 1) {
                    this.page -= 1;
                }
            }
        }
    }
</script>
<template>
    <div>
        <Button @click = "backPage()">Anterior</Button>
        <Button @click = "passPage()">Próximo</Button>
    </div>
</template>