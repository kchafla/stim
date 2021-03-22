<template>
    <section id="home">
        <div class="container">
            <div class="row">
                <div id="welcome">
                    Welcome to {{ app }}!
                </div>
            </div>
            <div class="row">
                <div id="reloj">
                    🕒 {{ hora }}:{{ minuts }}:{{ segons }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    let data = new Date();

    export default {
        props: {
            app: String
        },
        data() {
            return {
                hora: data.getHours(),
                minuts: data.getMinutes(),
                segons: data.getSeconds()
            }
        },
        mounted() {
            setInterval(() => {
                data = new Date();
                this.hora = data.getHours()
                this.minuts = data.getMinutes()
                this.segons = data.getSeconds()
            }, 1000)
        },
        beforeUnmount() {
            clearInterval();
        }
    }
</script>

<style scoped>

</style>
