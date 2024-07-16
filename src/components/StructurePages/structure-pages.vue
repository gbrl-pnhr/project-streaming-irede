<script lang="ts">
import type { StreamingService } from '@/views/streaming.service';

export default {
    name: "StructurePages",
    props: {
        streamingPosters: Array < StreamingService > ,
    }
}
</script>

<template>
    <div class="min-h-screen bg-gray-800">
        <div class="flex items-center text-center sm:pt-8">
            <ul class="flex-wrap">
                <li class="inline-block relative lg:m-6 lg:mt-4 sm:justify-center my-5" v-for="posters in streamingPosters">
                    <div>
                        <div class="transform transition duration-500 hover:scale-110 ">
                            <RouterLink to="/details">
                                <card-poster class="mx-5" :streamingPosters="posters"/>
                            </RouterLink>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="flex justify-center items-center p-8">
            <!-- referencia para a paginação -->
            <p class="text-white text-center">1 ... 500</p>
        </div>
    </div>
</template>