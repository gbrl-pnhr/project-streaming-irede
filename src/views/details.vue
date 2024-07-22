<script lang="ts">
import { FavoritesService } from '@/views/Favorites/favorite.service';
import { StreamingService } from './streaming.service';
import { Streamings } from '@/models/streaming.model';

export default {
    data() {
        return {
            detail: new Streamings(),
            isFavorite: false,
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
                    }
                })
            this.service.getDetailStreaming(Number(this.$route.params.id), this.$route.params.media.toString()!)
        },
        toggleFavorite() {
            if (this.isFavorite) {
                this.serviceFavorites.removeFavorite(this.detail);
            } else {
                this.detail.media_type = this.$route.params.media.toString()
                this.serviceFavorites.addFavorite(this.detail);
            }
            this.isFavorite = !this.isFavorite;
        },
    }
}
</script>

<template>
    <div>
        <Button @click="toggleFavorite"
            class="rounded bg-red-700 text-black font-semibold hover:bg-black hover:text-red-700 hover:outline-none hover:ring-2 hover:ring-red-700 p-1">
            {{ isFavorite ? 'Remover' : 'Favoritar' }}
            <v-icon :name="isFavorite ? 'fa-heart-broken' : 'ri-heart-add-line'"></v-icon>
        </Button>
    </div>
</template>
