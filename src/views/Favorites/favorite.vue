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
            this.favorites = this.favorites.filter(favorite => favorite.id !== value.id);
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
    <body class="bg-gray-800 text-center">
        <Button class="m-3 px-3 py-2 w-64 border text-white rounded-lg hover:bg-gray-700 transition duration-200 hover:scale-105" @click="clearAll">
            Limpar
        </Button>
        <structure-pages :streamingPosters="favorites" :isButtonVisible="true" @delete-favorite="removeFavorite" />
    </body>
</template>