<script lang="ts">
import { FavoritesService } from './Favorites/favorite.service';
import { StreamingService } from './streaming.service';
import { Streamings } from '@/models/streaming.model';

export default {
    data() {
        return {
            detail: new Streamings(),
            btn: true,
        };
    },
    created() {
        this.getDetails();

    },
    computed: {
        service(): StreamingService {
            return new StreamingService();
        },
        serviceFavorites(): FavoritesService {
            return new FavoritesService();
        }
    },
    methods: {
        getDetails() {
            this.service.streamings
                .subscribe({
                    next: (response: any) => {
                        this.detail = response;
                        console.log(response)
                    }
                })
            this.service.getDetailStreaming(Number(this.$route.params.id), this.$route.params.media.toString())
        },
        setFavorite() {
            this.btn = !this.btn;
            let newFavorite = new Streamings()
            newFavorite = this.detail
            if (newFavorite && !this.serviceFavorites.favorites.list.includes(newFavorite)) {
                this.serviceFavorites.addFavorite(newFavorite);
            }


        },
        removeFavorite(streaming: object) {
            this.serviceFavorites.removeFavorite(streaming)
            this.btn = !this.btn;
        }
    }
}
</script>

<template>
    <div>
        {{ detail.name || detail.title }}
        <Button type="button" @click="setFavorite" v-if="btn"
            class="bg-red-700 rounded text-black font-semibold hover:bg-black hover:text-red-700 focus:outline-none focus:text-red-700 focus:bg-black focus:ring-2 focus:ring-white hover:ring-2 hover:ring-white p-1">
            Favoritar
            <v-icon name="ri-heart-add-line"></v-icon>
        </Button>
        <Button type="button" @click="removeFavorite(detail)" v-else
            class="bg-black rounded text-red-700 font-semibold hover:bg-red-700 hover:text-black outline-none focus:text-red-500 focus:bg-black ring-2 ring-white p-1">
            Remover
            <v-icon name="fa-heart-broken"></v-icon>
        </Button>
    </div>
</template>
