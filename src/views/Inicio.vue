<script setup lang="ts">
import { ref } from 'vue'
import router from '../router'
import { getInstance } from '../Services/crud'

const listado = ref([])
const info = getInstance('', null)
info.then((res) => {
  listado.value = res.data
})
</script>

<template>
  <div>
    <h3 class="h3">
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
                <th class="table-header">
                  Identificación
                </th>
                <th class="table-header">
                  Nombre
                </th>
                <th class="table-header">
                  Correo Electrónico
                </th>
                <th class="table-header">
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
                  <button class="button-primary" @click="router.push(`/Ver/${persona.id}`)">
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
          <button class="button-primary" @click="router.push('/Agregar')">
            <span>Agregar Persona</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
