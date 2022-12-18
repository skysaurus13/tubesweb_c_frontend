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
            component: importComponent("DashboardLayout"),
            children: [
                //dashboard
                {
                    path: "/dashboard",
                    name: "Root",
                    component: importComponent("DashboardIndex"),
                },
                {
                    path: "/buah",
                    name: "Buah",
                    component: importComponent("BuahList"),
                },
                {
                    path: "/add",
                    name: "Tambah Pengiriman",
                    component: importComponent("TambahPengiriman"),
                },
                {
                    path: "/cek",
                    name: "Cek Pengiriman",
                    component: importComponent("CekPengiriman"),
                },
                {
                    path: "/hub",
                    name: "Hubungi Kami",
                    component: importComponent("HubungiKami"),
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