<script lang="ts">
import NavBar from './components/NavBar/nav-bar.vue';

export default {
  components:{
    NavBar,
  }
}
</script>

<template> 
  <header>
    <NavBar/> 
  </header>  
  <RouterView/>
</template>