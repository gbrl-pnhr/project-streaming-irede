<template>
  <!--div class="card2">    
    <div class="transparence">
      <div class="conteiner"> 
      <div>
        <p class="title"> Titulo do video </p>
      </div>
      <div class="textsmall"> 
        <a> 2014 </a>
        <a> 7.5 </a> | 
        <a> 110 min </a>
      </div>
      <div class="textgroung"> 
        <p> "Este filme acontece na codade de Trana durante uma guerra civil entre dois grupos pro liberdade"</p>
      </div>
    </div-->

    <Card style="width: 25rem; overflow: hidden">

        <img alt="user header" src="/images/usercard.png" />
   
    </Card>


 </template>

<script lang="ts">
import Card from 'primevue/card';


export default{  
  name: "view_details",
  date(){
    return {
      title: 'title',
      releaseyear: "2024",
      note : "7.5",
      duration: "110 min",
      sinopse : "Este filme acontece na codade de Trana durante uma guerra civil entre dois grupos pro liberdade",
    }
  },
  methods:{
      DataVideo(){          
      }
  } 
}
</script>

