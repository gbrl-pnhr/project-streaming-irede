<template>
  <div id="imageBackground" class="bg-no-repeat bg-scroll bg-cover bg-center">
    <div class="bg-gradient-to-r from-black to-transparent">
      <div class="block lg:inline-block h-screen collumns-1 lg:columns-2">        
        <div class="block p-4 lg:p-24 lg:inline-block">
          <div class="text-[36px] font-extrabold text-white lg:text-[48px]">
            {{ titleMovie }}
          </div>          
          <div class="text-[16px] text-white lg:text-[18px]">
            <a> {{ year }} &nbsp | </a>
            <a style="color: rgb(20,120,0);">&nbsp {{ assessment }} &nbsp </a> 
            <a>| &nbsp {{ duration }} </a>
          </div>          
          <div class="text-[18px] text-white text-justify lg:text-[24px]">
            {{ sinopse }}
          </div> 
          <div>
            <Button label="click"> </Button>
          </div>
        </div>
        <div class="flex justify-center lg:inline-block lg:mt-56 lg:mx-24" >
          <iframe class=" border-2 rounded-lg " :src="urlMovie" title="Moana Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default{
  data(){
    return{
      titleMovie: 'Moana',
      year: '2014',
      duration: '120 min',
      assessment: '7.5',
      sinopse: 'Uma jovem parte em uma missão para salvar seu povo. Durante a jornada, Moana conhece o outrora poderoso semideus Maui, que a guia em sua busca para se tornar uma mestre em encontrar caminhos. Juntos, eles navegam pelo oceano em uma viagem incrível.',
      urlBackground: 'https://s2.glbimg.com/cic0sVOCxbZM6NZi6urWWKUG04M=/s.glbimg.com/jo/g1/f/original/2015/10/08/moana-disney.jpg',
      urlMovie: "https://www.youtube.com/embed/LKFuXETZUsI",
      favorite: false,     
    }
  },
  mounted(){
    this.setBackground();
    

  },
  methods:{
    setBackground(){
      document.getElementById("imageBackground").style.backgroundImage = `url("${this.urlBackground}")`;
    },
  }
}
</script>


