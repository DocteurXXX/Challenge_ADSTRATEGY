import Vue from 'vue'
import Router from 'vue-router'
import Annonce from '@/components/Annonce'

import Home_Page from "../pages/Home_Page";


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home_Page',
            component: Home_Page
        },
        {
            path: '/annonce',
            name: 'Annonce',
            component: Annonce
        },
        // {
        //     path: '/test',
        //     name: 'Test',
        //     component: Test
        // },
        // {
        //   path: '/coins/:id',
        //   name: 'Coins',
        //   component: Coins
        // }
    ]
})
