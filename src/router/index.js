import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Vue 3 SPA' },
    },
    {
      path: '/campus-corner',
      name: 'campus-corner',
      // Lazy-loaded: chunk is fetched only when the route is visited.
      component: () => import('../views/CampusCornerView.vue'),
      // `bare` means the page supplies its own full-bleed layout.
      meta: { bare: true, title: 'Campus Corner — a café on Library Square' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About — Vue 3 SPA' },
    },
    {
      // Old or unknown URLs land on the index rather than a blank screen.
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Vue 3 SPA'
})

export default router
