<template>
  <main>
    <v-container fluid fill-height class="background">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm6 elevation-6>
          <v-toolbar dark color="#d66700">
            <v-toolbar-title>
              <h1>Login</h1>
            </v-toolbar-title>
          </v-toolbar>

          <v-card>
            <v-card-text class="pt-4">
              <div>
                <v-form ref="form">
                  <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                  <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                    label="Password" v-model="password" required @click:append="show1 = !show1"
                    :rules="passwordRules"></v-text-field>
                  <v-btn color="success" @click="submit">Login</v-btn>
                  <p class="forgot-password text-center mt-3">
                    Belum Punya Akun?
                    <router-link :to="{name: 'register'}">Register</router-link>
                  </p>
                </v-form>
              </div>
            </v-card-text>
          </v-card>
          <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
            {{ error_message }}
          </v-snackbar>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<style>
.background {
  background-image: url('https://shipper.id/blog/wp-content/uploads/2021/08/3750569.jpg');
  height: 100vh !important;
  background-size: cover;
}
</style>

  
<script>
export default {
  name: "LoginMenu",
  components: {
  },
  data() {
    return {
      snackbar: false,
      error_message: "",
      color: "",
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
            this.error_message = response.data.message;
            this.color = "green";
            this.snackbar = true;
            this.clear();
            this.$router.push({ name: "Root", });
          })
          .catch((error) => {
            this.error_message = error.response.data.message;
            this.color = "red";
            this.snackbar = true;
            localStorage.removeItem("token");
          })
          ;
      }
    },
    clear() {
      this.$refs.form.reset();
    },

  },
};
</script>