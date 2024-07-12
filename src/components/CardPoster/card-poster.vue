<script lang="ts">
import { Streamings } from '@/models/streaming.model';

export default {
    name: "Card-Poster",
    props:{
        url: Streamings,
    }
}
</script>

<template>
    <Card style="width: 304px;height: 456px; overflow: hidden">
        <template #header>
            <img alt="user header" :src="`https://image.tmdb.org/t/p/w342/${url?.poster_path}`"/>
        </template>
    </Card>
</template>