<template>

  <div class="grid w-full gap-6 md:grid-col md:w-fit">
    <div>
      <input type="checkbox" id="react-option" :checked="startFavorite" @click="status" class="hidden peer">
      <label v-if="startFavorite" for="react-option"
        class="inline-flex items-center justify-between w-full p-4 text-white bg-black border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-600 hover:text-red-600 hover:border-red-600 peer-checked:text-white hover:bg-gray-50 peer-checked:bg-red-600 peer-checked:hover:border-white">
        <v-icon name="ri-heart-fill" class="mx-2" /> <div class="w-full text-lg font-semibold"> {{ textIsFavorite }} </div> 
      </label>
      <label v-else for="react-option"
        class="inline-flex items-center justify-between w-full p-4 text-white bg-black border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-red-600 hover:text-red-600 hover:border-red-600 peer-checked:text-white hover:bg-gray-50 peer-checked:bg-red-600 peer-checked:hover:border-white">
        <v-icon name="ri-heart-fill" class="mx-2" /> <div class="w-full text-lg font-semibold"> {{ textNotFavorite }} </div>       
      </label>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  props: {
    startFavorite: Boolean,
    textIsFavorite: String,
    textNotFavorite: String,
  },
  // data() {
  //   return {
  //     isfavorite: this.startFavorite
  //   }
  // },
  methods: {
    status() {
      this.$emit('onClickFavoriteButton')
      // this.isfavorite = !this.isfavorite
      // if (this.isfavorite) {
      //   this.$emit('favorite', { message: 'isSelect' })
      // } else {
      //   this.$emit('favorite', { message: 'notSelect' })
      // }
    }
  },
}

</script>
