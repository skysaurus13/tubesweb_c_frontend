import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function importComponent(path){
    return () => import(`./components/${path}.vue`);
}

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "login",
            component: importComponent("LoginPage"),
        },
        
        {
            path: "/register",
            name: "register",
            component: importComponent("RegisterPage"),
        },

        

        {
            path: "/dashboard",
            name: "dashboard",
            component: importComponent("Menu/DashboardLayout"),
            children: [
                //dashboard
                {
                    path: "/dashboard",
                    name: "Root",
                    component: importComponent("Menu/DashboardIndex"),
                },
                {
                    path: "/buah",
                    name: "Buah",
                    component: importComponent("Menu/BuahList"),
                },
                {
                    path: "/add",
                    name: "Tambah Pengiriman",
                    component: importComponent("Menu/TambahPengiriman"),
                },
                {
                    path: "/cek",
                    name: "Cek Pengiriman",
                    component: importComponent("Menu/CekPengiriman"),
                },
                {
                    path: "/hub",
                    name: "Hubungi Kami",
                    component: importComponent("Menu/HubungiKami"),
                },
                {
                    path: "/profil",
                    name: "Profil",
                    component: importComponent("Menu/ProfilePage"),
                },
                {
                    path: "/updateProfile",
                    name: "updateProfile",
                    component: importComponent("Menu/UpdateProfilePage"),
                },
                // {
                //     path: "/profil",
                //     name: "Profil",
                //     component: importComponent("Profil"),
                // },
            ],
        },
    ],
});


export default router;