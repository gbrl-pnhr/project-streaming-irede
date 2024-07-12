<template>
  <div class="background min-height-full; max-w-full">
    <div class="transparency" >
      <Card>
          <template #title>
            <div class="text-[48px] font-normal md:font-bold">
              {{ titleMovie }}
            </div> 
          </template>

        <template #subtitle>  
          <div class="text-[16px]">
            <a> {{ year }} &nbsp | </a>
            <a style="color: rgb(20,120,0);">&nbsp {{ assessment }} &nbsp </a> 
            <a>| &nbsp {{ duration }} </a>
          </div>   
        </template>

        <template #content>            
              <div class="text-[24px]">
                {{ sinopse }} 
              </div> 
        </template>
          
        <template #footer> 
          <ToggleSwitch  v-model="checked"> Favorito </ToggleSwitch> 
        </template>
      </Card>


       
         <iframe style="border-radius: 40px; scale: 50%;" width="773" height="435" :src="urlMovie" title="Moana Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
      
        
   
  
         </div>
    </div>
</template>

<script lang="ts">

export default{
  data(){
    return{
      titleMovie: 'Moana',
      urlBackground: 'https://s2.glbimg.com/cic0sVOCxbZM6NZi6urWWKUG04M=/s.glbimg.com/jo/g1/f/original/2015/10/08/moana-disney.jpg',
      sinopse: 'Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos. Juntos, eles navegam pelo oceano em uma viagem incrível.',
      year: '2014',
      assessment: '7.5',
      duration: '120 min',
      urlMovie: "https://www.youtube.com/embed/LKFuXETZUsI",
      checked: true,     
    }
  }
}
</script>

<style scoped>
.background{
  background-image: url( 'https://s2.glbimg.com/cic0sVOCxbZM6NZi6urWWKUG04M=/s.glbimg.com/jo/g1/f/original/2015/10/08/moana-disney.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.transparency{
  columns: 2;
  background-image: linear-gradient(to right, rgba(0,0,0,1),rgba(0,0,0,0.8), rgba(0, 0, 0, 0));
  color: rgb(255, 255, 255);
  padding: 100px;
}
</style>


