import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Mine from '../views/Mine.vue'
import Detail from '../views/Detail.vue'
// npm install --save axios vue-axios

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/city',
        name: 'City',
        component: City
    },
    {
        path: '/mine',
        name: 'Mine',
        component: Mine
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    }
]


const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: "exact-acrive",
    // scrollBehavior(to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    // }
})

export default router