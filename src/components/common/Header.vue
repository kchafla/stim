<template>
    <section id="header">
        <div class="container">
            <div class="row">
                <!-- Logo -->
                <h1 id="logo" class="col-2">
                    <router-link to="/">
                        <span class="cercle">🎮</span> Stim
                    </router-link>
                </h1>
                <!-- Menu 1 -->
                <div class="col-6">
                    <nav id="nav1">
                        <router-link to="/search">
                                STORE
                        </router-link>
                        <a href="#">COMMUNITY</a>
                        <a href="#">ABOUT</a>
                        <a href="#">SUPPORT</a>
                    </nav>
                </div>
                <!-- Menu 2 -->
                <div class="col-4">
                    <nav id="nav2" class="right">
                        <span id="logged" v-if="shared.user">
                            Welcome, <b>{{ shared.user }}</b>!
                            <a id="logout" @click="logout">Logout</a>
                        </span>
                        <span id="notLogged" v-else>
                            <a id="install" href="#" class="button">📁 Install Stim</a>
                            <router-link to="/login">
                                Login
                            </router-link>
                        </span>
                        <select v-model="shared.language" id="language" name="language">
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
                shared: this.$store.state
            }
        },
        watch: {
            "shared.language": function (val, oldVal) {
                if (val != oldVal) {
                    this.$store.commit("changeLang", val);
                }
            }
        },
        methods: {
            logout: function() {
                this.$store.commit("logOut");
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
