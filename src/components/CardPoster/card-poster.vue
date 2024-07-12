<script lang="ts">
export default {
    name: "Card-Poster",
    data(){
        return{
            url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm5NJZFX95NpkBlcanw-8eXeXzM16b6OlIudF2iSc7Pg82gfsLWaixuCDfS908CvA_3OAwUqxFLyaocEn9TlqnRtahgd5Vgpq4TQWITeQOYYlthS_Q5GxBbKYikX34dVmZA1sCgfdYScrqjCsYyzTXkNPmXyFWyaKZqbKHMZNLa4s9f46RQkFt/s1600/IMG_1090.jpeg"
        }
    }
}
</script>

<template>
    <Card style="width: 304px;height: 456px; overflow: hidden">
        <template #header>
            <img alt="user header" :src="url"/>
        </template>
    </Card>
</template>