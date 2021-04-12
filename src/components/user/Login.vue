<template>
    <section id="login">
        <div class="container">
            <form @submit="checkForm" id="login">
                <h1>INICIAR SESIÓN</h1>
                <label>Nombre de la cuenta de STIM</label><br>
                <input type="text" v-model="username" name="username" id="username"><br><br>
                <label>Contraseña</label><br>
                <input type="password" v-model="password" name="password" id="password"><br><br>
                <button>Iniciar sesión</button>
            </form>
        </div>
    </section>
</template>

<script>
    async function login(username, password) {
        try {
            const request = await fetch("https://script.google.com/macros/s/AKfycbzZ2N-8TdxAtDtOrWp9VyPdVJuOdCtMO9APLyOj1GnjTJzz_Er9TpVi6Cf6MF49elHn/exec", {
                method: "POST",
                body: JSON.stringify({
                    "action": "users.login",
                    "data": {
                        "username": username,
                        "password": password
                    }
                })
            });
            const response = await request.json();

            if (response["status"] == true) {
                return response["data"]["username"];
            } else {
                return "";
            }
        } catch (error) {
            console.log(error);
            return "";
        }
    }

    export default {
        data() {
            return {
                username: "",
                password: "",
                shared: this.$store.state
            }
        },
        methods: {
            checkForm: function(e) {
                e.preventDefault();
                
                let regexUser = new RegExp("^[a-zA-Z0-9]*$");
                /* let regexPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).*$"); */

                if (this.username != "" && regexUser.test(this.username)) {
                    if (this.password != "" /* && !this.password.includes(this.username) && regexPass.test(this.password) */) {
                        let logged = login(this.username, this.password);
                        logged.then((name) => {
                            if (name != "") {
                                this.$store.setUser(name);
                                this.$router.push({path: "/"});
                            } else {
                                alert("Error de credencials!")
                            }
                        });
                    } else {
                        alert("Error en la contraseña!");
                    }
                } else {
                    alert("Error en el nombre de usuario!");
                }
            }
        }
    }
</script>

<style scoped>

</style>
