<script lang="ts">
import { getFavorites, removeFavorite, clearFavorites, favoritesList , setFavorite } from './favorite.service';
export default {
    data() {
        return {
            favorites: [] as string[],
            favoritesList,
        }
    },
    mounted() {
        this.favorites = getFavorites()
        console.log(favoritesList.list)
    },
    methods: {
        removeFavorite(item: string) {
            removeFavorite(item)
            setTimeout(() => {
                window.location.reload();
            }, 100);
        },
        clearAll() {
            clearFavorites()
            setTimeout(() => {
                window.location.reload();
            }, 100);
        }
    }
}
</script>

<template>
    <div>
        <Button type="button" @click="clearAll"
            class="rounded bg-black text-white outline-none ring-2 ring-neutral-500 ring-offset-2 ring-offset-gray-800 m-6">
            Remover Todos
        </Button>
        <div v-for="item in favorites" class="m-6">
            {{ item }}
            <br>
            <Button type="button" @click="removeFavorite(item)"
                class="rounded-full w-6 h-auto bg-black text-red-700 outline-none ring-2 ring-neutral-500 ring-offset-2 ring-offset-gray-800 m-6">
                <v-icon name="fa-heart-broken" />
            </Button>
        </div>
    </div>
</template>