<template>
    <section id="footer">
        <div class="container">
            <div class="row">
                <section id="project" class="col-10">
                    <p>Website made with Vue.js by {{ author }}</p>
                    <p><a href="#">{{ organization }}</a></p>
                    <p><a href="#">{{ license }}</a></p>
                </section>
                <section id="organization" class="col-2">
                    <img :alt="organization" height="100" src="https://agora.xtec.cat/iesjoaquimmir/wp-content/uploads/usu530/2018/03/logo-JM-blau_mini-.jpg">
                </section>                
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            author: String,
            organization: String,
            license: String,
        }
    }
</script>

<style scoped>
    #footer {
        background-color: rgb(23, 26, 33);
        padding: 20px 0;
        margin-top: 30px;
    }
</style>
