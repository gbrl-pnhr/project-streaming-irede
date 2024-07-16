<script lang="ts">
import type { Streamings } from '@/models/streaming.model';

export default {
    name: "StructurePages",    
    props: {
        streamingPosters: {
            type: Array<Streamings>,
            required: true
        },
        isButtonVisible: {
            type: Boolean,
            required: true
        },
    },
    methods: {
        sendFavoriteDelete(favorite: Streamings) {
            this.$emit('delete-favorite', favorite)
        }
    }
}
</script>

<template>
    <div class="bg-gray-800 min-h-screen w-full flex justify-center">
        <div class="flex text-center min-h-screen sm:pt-8">
            <ul class="flex-wrap">
                <li class="inline-block relative lg:m-6 lg:mt-4 sm:justify-center my-5"
                    v-for="posters in streamingPosters">
                    <div>
                        <div class="transform transition duration-500 hover:scale-110 ">
                            <RouterLink :to="{ name: 'detailspage', params: { typemedia: posters.media_type, id: posters.id }}">
                                <card-poster class="mx-5" :streamingPosters="posters"/>
                            </RouterLink>
                        </div>
                        <Button type="button" v-if="isButtonVisible" @click="sendFavoriteDelete(posters)"
                            class="rounded-full w-6 h-auto bg-white text-black hover:text-red-700 outline-none hover:ring-2 hover:ring-neutral-500 ring-offset-2 ring-offset-gray-800 m-6 transition duration-300 hover:scale-110">
                            <v-icon name="fa-heart-broken" />
                        </Button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>