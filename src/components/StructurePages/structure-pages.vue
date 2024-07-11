<script lang="ts">
    export default{
        name: "StructurePages"
    }
</script>

<template>
    <main>
        <div class="w-screen h-screen  bg-black">      <!-- conteiner -->
            <div class="flex justify-center items-center">    <!-- scrollImages -->
                <div class="allImages inline-flex bg-gray-700 p-28">
                    <div class="cardImages p-16 bg-blue-600 m-5">FILME 1</div>
                    <div class="cardImages p-16 bg-blue-600 m-5">FILME 2</div>
                    <div class="cardImages p-16 bg-blue-600 m-5">FILME 3</div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
/* .scrollImages {
    background-color: rgb(42, 41, 41);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.allImages {
    background-color: rgb(54, 54, 54);
    padding: 25px 150px 50px;
    display: inline-flex;
}

.cardImages {
    padding: 100px;
    background-color: brown;
    margin: 20px;
    width: 304px;
    height: 456px;
    border-radius: 20px;
} */
</style>