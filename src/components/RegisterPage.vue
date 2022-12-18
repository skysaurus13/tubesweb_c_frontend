<template>
    <v-app>
      <v-main>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="register">
                    <v-text-field  label="Email" v-model="user.email" required></v-text-field>
                    <v-text-field  label="Nama" v-model="user.name" required></v-text-field>
                    <v-text-field  label="Nomor Telepon" v-model="user.nomorTelepon" required></v-text-field>
                    <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :type="show1 ? 'text' : 'password'"  label="Password" v-model="user.password" required  @click:append="show1 = !show1"></v-text-field>
                    <v-btn color="primary" type="submit">Register</v-btn>
                    <p class="forgot-password text-right">
                        Sudah Punya Akun?
                        <router-link :to="{name: 'login'}">Login</router-link>
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
import router from '@/router';
import axios from 'axios';

  export default {
      data() {
          return {
              show1: false,
              user: {
                  name: '',
                  email: '',
                  password: '',
                  nomorTelepon: '',
              }
          };
      },

      methods: {
          register() {
              console.log(this.user);
                axios.post('http://127.0.0.1:8000/api/register', this.user)
                  .then(() => {
                      router.push({
                        name: 'login'
                      })
                  })
                  .catch((error) => {
                      console.log(error);
                  });
          }
      }
  }
</script>