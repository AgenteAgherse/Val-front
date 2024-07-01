<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '../router'

const nuevo = ref({
  nombre: '',
  correo: '',
})
function register() {
  axios.post('http://localhost:8080', nuevo.value).then((res) => {
    router.push('/')
  })
}
</script>

<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Agregar una Persona
    </h3>

    <div class="flex flex-col mt-8">
      <div>
        <form @submit.prevent="register">
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-gray-700" for="username">Nombre</label>
              <input
                v-model="nuevo.nombre"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="text"
              >
            </div>

            <div>
              <label class="text-gray-700" for="emailAddress">Correo Electrónico</label>
              <input
                v-model="nuevo.correo"
                class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                type="email"
              >
            </div>
          </div>

          <div class="mt-4">
            <div class="min-w-full mt-2">
              <button class="px-4 mt-2 min-w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                <span>Registrar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
