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
                                {{ t('store') }}
                        </router-link>
                        <a href="#">{{ t('community') }}</a>
                        <a href="#">{{ t('about') }}</a>
                        <a href="#">{{ t('support') }}</a>
                    </nav>
                </div>
                <!-- Menu 2 -->
                <div class="col-4">
                    <nav id="nav2" class="right">
                        <span id="logged" v-if="shared.user">
                            {{ t('welcome') }}, <b>{{ shared.user }}</b>!
                            <a id="logout" @click="logout">{{ t('logout') }}</a>
                        </span>
                        <span id="notLogged" v-else>
                            <a id="install" href="#" class="button">📁 {{ t('install') }}</a>
                            <router-link to="/login">
                                {{ t('login') }}
                            </router-link>
                        </span>
                        <select v-model="shared.language" id="language" name="language">
                            <option selected disabled>{{ t('language') }}</option>
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
import { useI18n } from 'vue-i18n'

export default {
    setup() {
        const { t } = useI18n({
            inheritLocale: true,
            useScope: 'global',
        });

        return { t }
    },
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
