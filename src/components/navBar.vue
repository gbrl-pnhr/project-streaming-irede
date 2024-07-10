<script lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { RouterLink } from "vue-router";

export default {
    name: "NavBar",
    components: {
        "v-icon": OhVueIcon
    }
}
</script>

<template>
    <div class="font-sans antialiased" id="navbar">
        <nav class="flex items-center justify-between flex-wrap bg-blue-900 p-4">
            <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                <div class="flex items-center flex-no-shrink text-black mr-6">
                    <span class="font-semibold italic text-2xl tracking-tight">Canal com K</span>
                </div>
                <div class="text-bs sm:flex-grow">
                    <RouterLink to="/"
                        class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-red-700 font-semibold mr-4">
                        Home
                    </RouterLink>
                    <RouterLink to="/"
                        class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-red-700 font-semibold mr-4">
                        Filmes
                    </RouterLink>
                    <RouterLink to="/"
                        class="no-underline block mt-4 sm:inline-block sm:mt-0  text-black hover:text-red-700 font-semibold mr-4">
                        Series
                    </RouterLink>
                </div>
                <div>
                    <RouterLink
                        class="no-underline inline-block px-4 py-2 leading-none border rounded-md font-semibold text-black border-black hover:border-transparent hover:bg-white hover:text-red-700 mt-4 sm:mt-0"
                        to="/">
                        <span>
                            Favoritos
                            <v-icon name="ri-heart-fill" />
                        </span>
                    </RouterLink>
                </div>
            </div>
        </nav>
    </div>
</template>
