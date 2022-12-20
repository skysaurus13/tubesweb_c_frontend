<template>
  <main>
    <v-container fluid fill-height >
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm6 elevation-6>
          <v-toolbar dark color="primary">
            <v-toolbar-title >
              <h1>Login</h1>
            </v-toolbar-title>
          </v-toolbar>

          <v-card>
            <v-card-text class="pt-4">
              <div>
                <v-form ref="form">
                  <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                  <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :type="show1 ? 'text' : 'password'"  label="Password" v-model="password" required  @click:append="show1 = !show1" :rules="passwordRules"></v-text-field>
                  <v-btn color="primary" @click="submit" :class="{'blue white--text': valid, disabled: !valid }">Login</v-btn>
                    <p class="forgot-password text-right">
                        Belum Punya Akun?
                      <router-link :to="{name: 'register'}">Register</router-link>
                    </p> 
                </v-form>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>
  
<script>
    export default {
    name: "LoginMenu",
    components: {
    },
    data() {
      return {
        show1: false,
        email: "",
        password: "",

        emailRules: [(v) => !!v || "Email harus diisi dan tidak boleh kosong !"],
        passwordRules: [(v) => !!v || "Password harus diisi dan tidak boleh kosong !"],
      };
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
            
          this.$http
            .post(this.$api + "/login", {
              email: this.email,
              password: this.password,
            })
            .then((response) => {
              localStorage.setItem("id", response.data.user.id);
              localStorage.setItem("token", response.data.access_token);
              this.$router.push({name: "Root", });
            })
            .catch((error) => {
              this.error_message = error.response.data.message;
              alert("Email atau Password salah, silahkan coba lagi");
              localStorage.removeItem("token");
            });
          }
        },     
      },
  };
</script>