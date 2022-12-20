<template>
  <main>
    <v-container fluid fill-height class="bg">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm6 elevation-6>
          <v-toolbar dark color="primary">
            <v-toolbar-title ><h1>Register</h1></v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-text class="pt-4">
              <div>
                <v-form v-model="valid" ref="form"> 
                  <v-text-field label="Name" v-model="name" :rules="nameRules" required></v-text-field> 
                  <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                  <v-text-field label="Nomor Telepon" v-model="nomorTelepon" :rules="noTlpRules" required></v-text-field>
                  <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :type="show1 ? 'text' : 'password'"  label="Password" v-model="password" required  @click:append="show1 = !show1" :rules="passwordRules"></v-text-field>
                    <v-btn class="mr-3 mt-3" @click="submit" color="primary">Register</v-btn>
                    <p class="forgot-password text-right">
                      Sudah Punya Akun?
                      <router-link :to="{name: 'login'}">Login</router-link>
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
  name: "RegisterMenu",
  data() {
    return {
      valid: false,

      name: '',
      email: '',
      noTlp: '',
      password: '',

      nameRules: [(v) => !!v || "Nama harus diisi dan tidak boleh kosong !"],
      passwordRules: [(v) => !!v || "Password harus diisi dan tidak boleh kosong !"],
      emailRules: [(v) => !!v || "E-mail harus diisi dan tidak boleh kosong !"],
      noTlpRules: [(v) => !!v || "Nomor Telepon harus diisi dan tidak boleh kosong !"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$http
          .post(this.$api + '/register', {
            name:this.name,
            email: this.email,
            password: this.password,
            nomorTelepon: this.nomorTelepon,
          })
          .then((response) => {
            this.error_message = response.data.message;
            this.color = "green";
            this.snackbar = true;
            this.load = false;
            this.clear();
            this.$router.push({
              name: 'login',
            });
          })
          .catch((error) => {
            this.error_message = error.response.data.message;
          })
      }
    },
  },
};
</script>