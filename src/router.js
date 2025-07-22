import { createRouter, createWebHistory } from 'vue-router'
import Utama from './Layout/Utama.vue'
import Beranda from './Menu/Beranda.vue'
import About from './Menu/about.vue'
import Portfolio from './Menu/portfolio.vue'
import Contact from './Menu/Contact.vue'


const routes = [
    {
        path: "/",
        name: "Utama",
        component: Utama,
        children: [
          {
            path: "beranda",
            name: "Beranda",
            component: Beranda,
          },
          {
            path: "about",
            name: "About",
            component: About,
          },
          {
            path: "portfolio",
            name: "Portfolio",
            component: Portfolio,
          },
          {
            path: "contact",
            name: "Contact",
            component: Contact
          }
        ],
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
