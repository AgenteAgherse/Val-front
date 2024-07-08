<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getInstance, updateInstance } from '../Services/crud'
import router from '../router'

const frontRoute = useRoute()
const id = frontRoute.params.id

if (id === undefined || id === null)
  router.push('/')

const data = ref()
const info = getInstance(`${id}`, null)
info.then((res) => {
  data.value = res.data
})

const nuevo = ref({
  id: frontRoute.params.id,
  nombre: '',
  correo: '',
})

function actualizar() {
  const updated = updateInstance(`${id}`, nuevo.value)
  updated.then((res) => {
    data.value = res.data
  })
  router.push('/')
}
</script>

<template>
  <div>
    <h3 class="h3">
      Editar una Persona
    </h3>

    <div class="grid grid-cols-2 mt-8">
      <div>
        <form @submit.prevent="router.push('/')">
          <div class="gap-6 mt-4">
            <div>
              <label class="text-gray-700" for="username">Nombre</label>
              <input
                v-model="nuevo.nombre"
                class="input"
                type="text"
                required
              >
            </div>

            <div>
              <label class="text-gray-700" for="emailAddress">Correo Electrónico</label>
              <input
                v-model="nuevo.correo"
                class="input"
                type="email"
                required
              >
            </div>
          </div>
        </form>
      </div>

      <div class="grid grid-cols-1 bg-white m-2 p-2 round round-1 divide-y-2">
        <div>
          <h2 class="text-center text-gray-700">
            Información anterior
          </h2>
          <ul>
            <li><strong>Nombre: </strong> {{ data.nombre }}</li>
            <li><strong>Correo: </strong>{{ data.correo }}</li>
          </ul>
        </div>

        <div>
          <h2 class="text-center text-gray-700 mt-2">
            Información Nueva
          </h2>

          <ul>
            <li><strong>Nombre: </strong> {{ nuevo.nombre }}</li>
            <li><strong>Correo: </strong> {{ nuevo.correo }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="min-w-full mt-2">
      <button class="px-4 mt-2 min-w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-yellow-600 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500" @click="actualizar">
        <span>Actualizar</span>
      </button>
    </div>
  </div>
</template>
