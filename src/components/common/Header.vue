<template>
    <section id="header">
        <div class="container">
            <div class="row">
                <!-- Logo -->
                <h1 id="logo" class="col-2">
                    <a href="#">
                        <span class="cercle">🎮</span> STIM
                    </a>
                </h1>
                <!-- Menu 1 -->
                <div class="col-6">
                    <nav id="nav1">
                        <a href="#">STORE</a>
                        <a href="#">COMMUNITY</a>
                        <a href="#">ABOUT</a>
                        <a href="#">SUPPORT</a>
                    </nav>
                </div>
                <!-- Menu 2 -->
                <div class="col-4">
                    <nav id="nav2" class="right">
                        <span id="logged" v-if="logged">
                            Welcome, <b>{{ nom }}</b>!
                            <a id="logout" href="#">Logout</a>
                        </span>
                        <span id="notLogged" v-else>
                            <a id="install" href="#" class="button">📁 Install Stim</a>
                            <a id="login" href="#">Login</a>
                        </span>
                        <select v-model="idioma" id="language" name="language">
                            <option selected disabled>Language</option>
                            <option value="en">🇬🇧 EN</option>
                            <option value="es">🇪🇸 ES</option>
                            <option value="ca">🇦🇩 CA</option>
                        </select>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                idioma: localStorage.getItem("idioma"),
                logged: false,
                nom: ""
            }
        },
        watch: {
            idioma(val, oldVal) {
                if (val != oldVal) {
                    localStorage.setItem("idioma", val);
                }
            }
        },
        beforeMount: function() {
            if (document.cookie != "") {
                let sessio = JSON.parse(document.cookie);

                this.logged = true;
                this.nom = sessio.username;
            }
        }
    }
</script>

<style scoped>
    #header {
        margin: 20px 0;
    }

    #header .cercle {
        background-color: rgb(184, 182, 180);
        border-radius: 50%;
        padding: 5px;
    }

    #header a:hover .cercle {
        background-color: rgb(255, 255, 255);
    }

    #header #nav1 {
        margin-top: 24px;
    }

    #header #nav2 {
        margin-top: 10px;
        font-size: 0.9em;
    }

    #header #nav1 a,
    #header #nav2 a {
        margin-right: 5px;
    }
</style>
