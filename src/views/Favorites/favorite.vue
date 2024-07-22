<script lang="ts">
import type { Streamings } from '@/models/streaming.model';
import { StreamingService } from '../streaming.service';
import { FavoritesService } from './favorite.service';

export default {
    data() {
        return {
            favorites: new Array<Streamings>(),
        }
    },
    mounted() {
        this.getFavorites()
    },
    computed: {
        serviceFavorites(): FavoritesService {
            return new FavoritesService()
        },
        service(): StreamingService {
            return new StreamingService()
        }
    },
    methods: {
        removeFavorite(value: Streamings) {
            this.serviceFavorites.removeFavorite(value);
            this.favorites = this.favorites.filter(fav => fav.id !== value.id);
        },
        clearAll() {
            this.serviceFavorites.clearFavorites();;
            this.favorites = [];
        },
        getFavorites() {
            this.favorites = this.serviceFavorites.favorites.list;
        },
    }
}
</script>

<template>
    <body>
        <structure-pages :streamingPosters="favorites" :botao="true" @delete-favorite="removeFavorite" />
    </body>
</template>