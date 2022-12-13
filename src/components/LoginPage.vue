<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login Form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field  label="Email" required></v-text-field>
                  <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :type="show1 ? 'text' : 'password'"  label="Password" required  @click:append="show1 = !show1"></v-text-field>
                  <v-btn color="primary">Login</v-btn>
                    <p class="forgot-password text-right">
                      Belum Punya Akun?
                      <router-link :to="{name: 'register'}">Register</router-link>
                    </p> 
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        show1: false,
  
      }
    },
    methods: {
      onSubmit() {
        // Perform login here...
        // You will likely want to use the email and password
        // from the form, which can be accessed via this.email
        // and this.password
      }
    }
  }
  </script>