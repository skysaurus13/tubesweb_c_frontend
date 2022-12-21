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
            path:'*',
            redirect: '/'
        },


        {
            path: "/login",
            name: "login",
            meta:{title:'login'},
            component: importComponent("LoginPage"),
        },
        
        {
            path: "/register",
            name: "register",
            meta:{title:'register'},
            component: importComponent("RegisterPage"),
        },

        

        {
            path: "/",
            component: importComponent("Menu/DashboardLayout"),
            children: [
                //dashboard
                {
                    path: "/dashboard",
                    name: "Root",
                    meta:{title:'Dashboard'},
                    component: importComponent("Menu/DashboardIndex"),
                },
                {
                    path: "/add",
                    name: "Tambah Pengiriman",
                    meta:{title:'Tambah Pengiriman'},
                    component: importComponent("Menu/TambahPengiriman"),
                },
                {
                    path: "/cek",
                    name: "Cek Pengiriman",
                    meta:{title:'Cek Pengiriman'},
                    component: importComponent("Menu/CekPengiriman"),
                },
                {
                    path: "/hub",
                    name: "Hubungi Kami",
                    meta:{title:'Hubungi Kami'},
                    component: importComponent("Menu/HubungiKami"),
                },
                {
                    path: "/profil",
                    name: "Profil",
                    meta:{title:'Profil'},
                    component: importComponent("Menu/ProfilePage"),
                },
                {
                    path: "/updateProfile",
                    name: "updateProfile",
                    meta:{title:'Ubah Profil'},
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

// set judul
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    if(to.name !== "login" && localStorage.getItem("token") == null && to.name !== "register"){
        next({name: 'login'});
    }
    else{
        next();
    }
});


export default router;