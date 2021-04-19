<template>
    <div id="main" class="col-9">
        <section id="searchbar" class="row">
            <div id="search" class="col-7">
                <input name="search">
                <button name="submit">Search</button>
            </div>
            <div id="sort" class="col-5">
                <div class="right">
                    <label for="criteria">Sort by</label>
                    <select name="criteria" v-model="filtre">
                        <option selected disabled>---</option>
                        <option value="asc">Price asc</option>
                        <option value="desc">Price desc</option>
                    </select>
                </div>
            </div>
        </section>
        <section id="messages">
            Mostrando los 20 primeros resultados...
        </section>
        <section id="results">
            <ul>
                <li class="row" v-for="game in shared.games" :key="game.id" v-bind="game.id">
                    <div class="col-2 cover">
                        <p><img alt="TITLE" v-bind:src="game.cover"></p>                                    
                    </div>
                    <div class="col-5 title">
                        <p><router-link v-bind:to="'/game/'+game.id">{{ game.title }}</router-link></p>
                        <p>
                            <span v-if="game.platforms.includes('win')" class="platform win"></span>
                            <span v-if="game.platforms.includes('mac')" class="platform mac"></span>
                            <span v-if="game.platforms.includes('linux')" class="platform linux"></span>
                        </p>
                    </div>
                    <div class="col-2 date">
                        <p>{{ game.date }}</p>
                    </div>
                    <div class="col-1 discount" v-if="game.discount">
                        <p><span class="box">-{{ game.discount.substring(3) }}%</span></p>
                    </div>
                    <div class="col-2 price">
                        <p class="old" v-if="game.discount">{{ game.price }}€</p>
                        <p class="current" v-if="game.price == 'Free to Play'">Free to Play</p>
                        <p class="current" v-else-if="game.price == ''">Free to Play</p>
                        <p class="current" v-else>{{ game.price }}€</p>
                    </div>
                </li>
            </ul>
        </section>
        <section id="paginator" class="row">
            <div id="page-items" class="col-6">
                <p>Showing 1-20 of 200 results</p>
            </div>
            <div id="page-index" class="col-6">
                <ul class="right">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li>...</li>
                    <li><a href="#">10</a></li>
                    <li><a href="#">></a></li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    async function GetGames() {
        try {
            const request = await fetch("https://script.google.com/macros/s/AKfycbzZ2N-8TdxAtDtOrWp9VyPdVJuOdCtMO9APLyOj1GnjTJzz_Er9TpVi6Cf6MF49elHn/exec?action=games.search&page=1", {
                method: "GET"
            });
            const response = await request.json();

            if (response["status"] == true) {
                return response["data"];
            } else {
                return "";
            }
        } catch (error) {
            console.log(error);
            return "";
        }
    }

    function comparar( a, b ) {
        let aprice;
        let bprice;

        if (a.price == "Free to Play" || a.price == "") {
            aprice = 0;
        } else {
            aprice = parseInt(a.price);
        }
        if (b.price == "Free to Play" || b.price == "") {
            bprice = 0;
        } else {
            bprice = parseInt(b.price);
        }

        if ( aprice < bprice ){
            return -1;
        }
        if ( aprice > bprice ){
            return 1;
        }
        return 0;
    }

    export default {
        data() {
            return {
                filtre: "",
                shared: this.$store.state
            }
        },
        beforeMount() {
            let allGames = GetGames();
            allGames.then((games) => {
                this.shared.games = games;
            });
        },
        watch: {
            "filtre": function (val) {
                if (val == "desc") {
                    this.shared.games = this.shared.games.sort(comparar).reverse();
                } else if (val == "asc") {
                    this.shared.games = this.shared.games.sort(comparar);
                }
            }
        },
    }
</script>

<style scoped>
img {
    width: 100%;
    height: 100%;
}


#main {
    padding-right: 5px;
}

#main section,
#results li {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 6px;
    margin-bottom: 5px;
}

#searchbar {
    background-color: rgba(0, 0, 0, 0.4);
}

#messages {
    color: rgb(250, 250, 210);
    padding: 10px 6px !important;
}

#results {
    background: none !important;
    padding: 0 !important;
}

#results ul {
    margin: 0;
    padding: 0;
    font-size: 0.8em;
}

#results li {
    padding: 0;
}
.cover p {
    height: 80px;
    margin: 0;
    overflow: hidden;
}

.title {
    padding-left: 10px;
}

.platform {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px;
    background-repeat: no-repeat;
    opacity: 0.8;
}

.platform.win {
    background-image: url("https://cdn2.iconfinder.com/data/icons/metro-ui-dock/128/OS_Windows.png");
}
.platform.mac {
    background-image: url("https://cdn2.iconfinder.com/data/icons/metro-ui-dock/128/OS_Apple.png");
}
.platform.linux {
    background-image: url("https://cdn2.iconfinder.com/data/icons/metro-ui-dock/128/OS_Linux.png");
}

.discount .box {
    color: #8bc53f;
    background-color: #4c6b22;            
}

.price .old {
    text-decoration:line-through;
}

#paginator {
    font-size: 0.9em;
}

#page-index li {
    display: inline;
    margin-left: 5px;
}
</style>
