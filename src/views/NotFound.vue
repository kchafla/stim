<template>
    <Header/>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>404 - NOT FOUND</h1>
                </div>
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

    export default {
        components: {
            Header,
            Footer,
        },
    };
</script>

<style scoped>

</style>