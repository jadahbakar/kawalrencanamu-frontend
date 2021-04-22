import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import longTermPlan from './routes/long-term-plan'
import middleTermPlan from './routes/middle-term-plan'
import shortTermPlan from './routes/short-term-plan'
import setting from './routes/setting'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/vision-mission-value',
      name: 'vision-mission-value',
      component: () => import('@/views/vision-mission-value/Dashboard.vue'),
      meta: {
        pageTitle: 'Vision, Mission & Value',
        breadcrumb: [
          {
            text: 'Vision, Mission & Value',
            active: true,
          },
        ],
      },
    },
    ...longTermPlan,
    ...middleTermPlan,
    ...shortTermPlan,
    ...setting,
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
