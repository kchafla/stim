<template>
  <Header/>
  <section id="content">
    <div class="container">
      <div class="row">
        <Games/>
        <Sidebar/>
      </div>
    </div>
  </section>
  <Footer 
    author="Kevin Chafla Moran"
    organization="INS Joaquim Mir"
    license="GNU GPLv3"
  />
</template>

<script>
  import Header from "../components/common/Header.vue";
  import Footer from "../components/common/Footer.vue";
  import Games from '../components/search/Games.vue';
  import Sidebar from '../components/search/Sidebar.vue';

  export default {
    components: {
      Header,
      Games,
      Sidebar,
      Footer,
    },
  };
</script>

<style scoped>

</style>
