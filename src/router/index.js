import Vue from 'vue'
import Router from 'vue-router'
import Annonce_Pages from "../pages/Annonce_Pages"
import Contact_Page from "../pages/Contact_Page";
import Profil_Page from "../pages/Profil_Page";
import Panier_Page from "../pages/Panier_Page";
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
            name: 'Annonce_Pages',
            component: Annonce_Pages
        },
        {
            path: '/contact',
            name: 'Contact_Page',
            component: Contact_Page
        },
        {
          path: '/profil',
          name: 'Profil_Page',
          component: Profil_Page
        },
        {
            path: '/panier',
            name: 'Panier_Page',
            component: Panier_Page
        }
    ]
})
