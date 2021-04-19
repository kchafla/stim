<template>
    <section id="home">
        <div class="container">
            <div class="row">
                <div class="col-2 cover">
                    <p><img alt="TITLE" v-bind:src="game.cover"></p>                                    
                </div>
                <div class="col-5 title">
                    <p>{{ game.title }}</p>
                    <p>
                        <span v-if="game.platforms.includes('win')" class="platform win"></span>
                        <span v-if="game.platforms.includes('mac')" class="platform mac"></span>
                        <span v-if="game.platforms.includes('linux')" class="platform linux"></span>
                    </p>
                </div>
                <div class="col-2 date">
                    <p>{{ game.date }}</p>
                </div>
                <div class="col-2 price">
                    <p class="current" v-if="game.price == 'Free to Play'">Free to Play</p>
                    <p class="current" v-else-if="game.price == ''">Free to Play</p>
                    <p class="current" v-else>{{ game.price }}€</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                shared: this.$store.state,
                gameId: this.$route.params.gameId,
                game: undefined 
            }
        },
        beforeMount() {
            this.shared.games.forEach(game => {
                if (game.id == this.gameId) {
                    this.game = game;
                }
            });
        }
    }
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}

.container {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
