<template>

  <div class="grid w-full gap-6 md:grid-col md:w-fit">
    <div>
      <input type="checkbox" id="react-option" :checked="isfavorite" @click="status" class="hidden peer">
      <label v-if="isfavorite" for="react-option"
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
    toggleFavorite: Boolean,
    textIsFavorite: String,
    textNotFavorite: String,
  },
  data() {
    return {
    isfavorite: this.toggleFavorite
    }
  },
  methods: {
    status() {
      this.isfavorite = !this.isfavorite
      this.$emit('onClickFavoriteButton')
    }
  },
}

</script>
