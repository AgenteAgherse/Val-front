<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import router from '../router'

const frontRoute = useRoute()
const id = frontRoute.params.id

if (id === undefined || id === null)
  router.push('/')

const data = ref()
axios.get(`http://localhost:8080/${id}`).then((res) => {
  data.value = res.data
})
</script>

<template>
  <div>
    <div class="min-w-full mt-6 overflow-hidden bg-white rounded shadow-lg">
      <div class="px-6 py-4">
        <div class="mb-2 text-xl font-bold text-gray-900">
          Información de la Persona
        </div>

        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                <strong>Información</strong>
              </th>
              <th class="px-5 py-3 text-xs font-semibold tracking-wider text-center text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <strong>Nombre</strong>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ data.nombre }}
                </p>
              </td>
            </tr>
            <tr class="text-center">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <strong>Identificación</strong>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ data.id }}
                </p>
              </td>
            </tr>

            <tr class="text-center">
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <strong>Correo</strong>
              </td>
              <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                <p class="text-gray-900 whitespace-nowrap">
                  {{ data.correo }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex flex-col mt-8">
      <div class="min-w-full mt-2">
        <button class="px-4 mt-2 min-w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500" @click="router.push('/')">
          <span>Volver a Inicio</span>
        </button>
      </div>
    </div>
  </div>
</template>
