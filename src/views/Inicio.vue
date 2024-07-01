<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import router from '../router'

const listado = ref([])
onMounted(() => {
  axios.get('http://localhost:8080/')
    .then((response: any) => {
      listado.value = response.data
    })
    .catch((error: any) => {
      alert(error)
    })
})
</script>

<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Listado de personas
    </h3>

    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-700 uppercase border-b border-gray-200 bg-gray-50">
                  Identificación
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-700 uppercase border-b border-gray-200 bg-gray-50">
                  Nombre
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-700 uppercase border-b border-gray-200 bg-gray-50">
                  Correo Electrónico
                </th>
                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-700 uppercase border-b border-gray-200 bg-gray-50">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody class="bg-white text-center">
              <tr v-for="persona in listado" class="p-2 text-sm text-gray-500">
                <td class="p-2">
                  {{ persona.id }}
                </td>
                <td class="p-2">
                  {{ persona.nombre }}
                </td>
                <td class="p-2">
                  {{ persona.correo }}
                </td>
                <td class="p-2">
                  <button class="px-4 mt-2 min-w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500" @click="router.push(`/Ver/${persona.id}`)">
                    <span>Ver</span>
                  </button>
                  <button class="px-4 mt-2 min-w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-yellow-600 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500" @click="router.push(`/Editar/${persona.id}`)">
                    <span>Editar</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="min-w-full mt-2">
          <button class="px-4 mt-2 min-w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500" @click="router.push('/Agregar')">
            <span>Agregar Persona</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
