<script lang="ts">
import { Streamings } from '../..//models/streaming.model';

export default {
    name: "CardPoster",    
    props: {
        streamingPosters: Streamings,
    }
}
</script>

<template>
    <Card class="w-[304px] h-[456px] overflow-hidden rounded-2xl">
        <template #header>
            <img alt="poster header" :src="`https://image.tmdb.org/t/p/w342${streamingPosters?.poster_path}`"/>
        </template>
    </Card>
</template>