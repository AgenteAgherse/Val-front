<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router'
import { getInstance } from '../Services/crud'

const frontRoute = useRoute()
const id = frontRoute.params.id

if (id === undefined || id === null)
  router.push('/')

const info = getInstance(`${id}`, null)
const data = ref()
info.then((res) => {
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
              <th class="table-header">
                <strong>Información</strong>
              </th>
              <th class="table-header">
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
        <button class="button-primary" @click="router.push('/')">
          <span>Volver a Inicio</span>
        </button>
      </div>
    </div>
  </div>
</template>
