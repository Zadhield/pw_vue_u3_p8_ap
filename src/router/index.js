import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteConsultarView from '@/views/EstudianteConsultarView.vue'
import EstudianteIngresarView from '@/views/EstudianteIngresarView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/estudianteConsultar',
    name: 'estudianteConsultarView',
    component:EstudianteConsultarView
  },

  {
    path: '/estudianteIngresar',
    name: 'estudianteIngresarView',
    component:EstudianteIngresarView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
