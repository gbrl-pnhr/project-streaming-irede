<script lang="ts">
import { Streamings } from '@/models/streaming.model';

export default {
    name: "StructurePages",
    props: {
        url: Streamings,
    }
}
</script>

<template>
    <body class="m-0 p-0">
        <div class="min-h-screen justify-between flex-wrap bg-gray-800">
            <div class="w-full inline-flex py-7 px-28">
                <ul>
                    <li class="inline-block m-6 mt-4 relative text-center">
                        <div class="w-full relative ">
                            <div class="transform transition duration-500 hover:scale-110 ">
                                <RouterLink to="/details">
                                    <card-poster class="mx-5" :url="url"/>
                                </RouterLink>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex justify-center items-center p-8">
                <p class="text-white text-center">1 ... 500</p>
            </div>
        </div>
    </body>
</template>