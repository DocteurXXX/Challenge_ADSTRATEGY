import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Annonce from '@/components/Annonce'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/annonce',
            name: 'Annonce',
            component: Annonce
        },
        // {
        //     path: '/contact',
        //     name: 'Coins',
        //     component: Coins
        // },
        // {
        //   path: '/coins/:id',
        //   name: 'Coins',
        //   component: Coins
        // }
    ]
})
