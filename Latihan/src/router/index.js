import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Description from "@/views/Description.vue";
import DefaultLayout from "@/layout/DefaultLayout.vue";

Vue.use('VueRouter')

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
            },
            {
                path: "/about",
                name: "About",
                component: About,
            },
            {
                path: "/description/:id",
                name: "Description",
                component: Description,
            }
        ]
    }
];
const router = new VueRouter({
    // el: "#inspire",
    // router: routes,
    // render: h => h(App),
    mode: "history",
    base: import.meta.env.BASE_URL,
    routes,
});

export default router;