<template>
    <div class="dashboard">
        <v-navigation-drawer class="fullheight" width="256" v-model="drawer" absolute temporary dark color="#ff6a00">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title white--text">NGanterWe</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link color="light-blue darken-4 " tag="router-link"
                    :to="item.to">
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar dark color="#ff6a00">
            <v-app-bar-nav-icon @click="drawer = true" color="white" justify="space-around"></v-app-bar-nav-icon>
            <v-list-item-title class="title">NGanterWe</v-list-item-title>
            <v-btn color="white" text @click="logout">Keluar</v-btn>
            <VSpacer />
        </v-app-bar>
        <div class="fullheight pa-5">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: "DashboardIndex",
    data() {
        return {
            drawer: false,
            group: null,
            items: [
                { title: "Dashboard", to: "/dashboard" },
                { title: "Tambah Pengiriman", to: "/add" },
                { title: "Cek Pengiriman", to: "/cek" },
                { title: "Hubungi Kami", to: "/hub" },
                { title: "Profil", to: "/profil" },
                // { title: "Keluar", to:"/keluar" },
            ],
        };
    },
    computed: {
        loggedin() {
            return localStorage.getItem("token") != null;
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('id');
            localStorage.removeItem('token');
            this.$router.push({ name: "login", });
        },
    }
};
</script>
<style scoped>
.fullheight {
    min-height: 100vh !important;
}

.title {
    position: relative;
    left: 50%;
    transform: translateX(-51%);
}
</style>