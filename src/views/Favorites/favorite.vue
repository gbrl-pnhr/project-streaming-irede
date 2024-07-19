<script lang="ts">
import type { Streamings } from '@/models/streaming.model';
import { StreamingService } from '../streaming.service';
import { FavoritesService } from './favorite.service';

export default {
    data() {
        return {
            favorites: new Array<Streamings>(),
            streamings: new Array<Streamings>()
        }
    },
    updated() {
        this.getFavoritesList()
    },
    created() {
        this.getFavoritesList()
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
        removeFavorite(item: Streamings) {
            this.serviceFavorites.removeFavorite(item)
        },
        clearAll() {
            this.serviceFavorites.clearFavorites()
        },
        getFavoritesList() {
            this.service.streamings.subscribe({
                next: (response: any) =>
                    this.streamings = response
            });
            //this.service.getDetailStreaming();
        },
    }
}
</script>

<template>
    <div>
        <Button type="button" @click="clearAll"
            class="rounded bg-black text-white outline-none hover:ring-2 hover:ring-neutral-500 hover:ring-offset-2 hover:ring-offset-gray-800 m-6 p-1">
            Remover Todos
        </Button>
        <div v-for="item in favorites" class="m-6">
            {{ item.name || item.title }}
            <br>
            <Button type="button" @click="removeFavorite(item)"
                class="rounded-full w-8 h-auto align-middle bg-gray-800 text-red-700 outline-none hover:bg-black hover:ring-2 hover:ring-neutral-500 hover:ring-offset-2 hover:ring-offset-white m-6 p-1">
                <v-icon name="fa-heart-broken" />
            </Button>
        </div>
    </div>
</template>