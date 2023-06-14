import { createRouter,createWebHistory } from "vue-router";
import homePage from '../views/homePage.vue'
import aboutPage from '../views/aboutPage.vue'
import portofolioPage from '../views/portofolioPage.vue'
import contactPage from '../views/contactPage.vue'
import settingPage from '../views/settingPage.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: homePage
        },
        {
            path:'/about',
            name:'about',
            component: aboutPage
        },
        {
            path:'/portofolio',
            name:'portofolio',
            component: portofolioPage
        },
        {
            path:'/contact',
            name:'contact',
            component: contactPage
        },
        {
            path:'/settings',
            name:'settings',
            component: settingPage
        }
    ]
})

export default router;