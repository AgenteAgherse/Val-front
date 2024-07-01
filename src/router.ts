import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Inicio.vue'
import Blank from './views/Blank.vue'
import Agregar from './views/Agregar.vue'
import Ver from './views/Ver.vue'
import Editar from './views/Editar.vue'
import Eliminar from './views/Eliminar.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Pagina Inicio',
    component: Dashboard,
  },
  {
    path: '/Agregar',
    name: 'Agregar Persona',
    component: Agregar,
  },

  {
    path: '/Ver/:id',
    name: 'Ver Persona',
    component: Ver,
  },
  {
    path: '/Editar/:id',
    name: 'Editar Persona',
    component: Editar,
  },
  {
    path: '/Eliminar',
    name: 'Eliminar Persona',
    component: Eliminar,
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
