<template>
  <Header/>
  <Game/>
  <Footer 
    author="Kevin Chafla Moran"
    organization="INS Joaquim Mir"
    license="GNU GPLv3"
  />
</template>

<script>
  import Header from "../components/common/Header.vue";
  import Footer from "../components/common/Footer.vue";
  import Game from '../components/games/Game.vue';

  export default {
    components: {
      Header,
      Game,
      Footer,
    },
  };
</script>

<style scoped>

</style>