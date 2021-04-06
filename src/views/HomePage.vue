<template>
  <Header/>
  <Home
    app="STIM"
  />
  <Footer 
    author="Kevin Chafla Moran"
    organization="INS Joaquim Mir"
    license="GNU GPLv3"
  />
</template>

<script>
  import Header from "../components/common/Header.vue";
  import Footer from "../components/common/Footer.vue";
  import Home from '../components/Home.vue';

  export default {
    components: {
      Header,
      Home,
      Footer,
    },
  };
</script>

<style scoped>

</style>
