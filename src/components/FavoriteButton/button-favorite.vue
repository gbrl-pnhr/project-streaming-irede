<template>
  <div>
    <input type="checkbox" id="heart" :checked="isfavorite" @click="status"/>
    <label v-if="isfavorite" for="heart"> {{textIsFavorite}} </label>
    <label v-else for="heart"> {{textNotFavorite}} </label>
  </div>
</template>

<script lang="ts">
  export default{
    props:{
      startFavorite: Boolean,
      textIsFavorite: String,
      textNotFavorite: String,
    },
    data(){
      return{
        isfavorite : this.startFavorite
      }
    },    
    methods:{
      status(){
        this.isfavorite = !this.isfavorite
        if(this.isfavorite){
          this.$emit('favorite',{message: 'isSelect'})          
        }else{
          this.$emit('favorite',{message: 'notSelect'})
        }
      }
    },         
  }

</script>  

<style scoped>  
/*      CHECKBOX         */
input[type="checkbox"] {  
    display: none;
}
input[type="checkbox"] + label {
    position: relative;
    display: inline-block;
    font-size: 1.6rem;
    padding-left: 2.5rem;
} 
input[type="checkbox"] + label:before {
    content: "\2764 ";
    position: absolute;
    top: -0.7rem;
    left: -0.55rem;   
    display: block;
    transition:  .5s ease;
    font-size: 2,4rem;
    padding: 0.63rem;
    color: white;
} 

input[type="checkbox"]:checked + label:after {
    content: '\2764';
    position: absolute;
    top: -0.3rem;
    left: -0.1rem;
    font-size: 1.9rem;
    transition:  .5s ease;
    color: red;
}
</style>