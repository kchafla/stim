<template>
  <Header/>
  <Login/>
  <Footer 
    author="Kevin Chafla Moran"
    organization="INS Joaquim Mir"
    license="GNU GPLv3"
  />
</template>

<script>
  import Header from "../components/common/Header.vue";
  import Footer from "../components/common/Footer.vue";
  import Login from '../components/user/Login.vue';

  export default {
    components: {
      Header,
      Login,
      Footer,
    },
  };
</script>

<style scoped>

</style>
