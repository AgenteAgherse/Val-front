<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import router from '../router'

const id = ref(0)

function eliminar() {
  const confirmacion = confirm('Estás seguro?')
  if (confirmacion) {
    axios.delete(`http://localhost:8080/${id.value}`).then((res) => {
      router.push('/')
    })
      .catch((error) => {
        alert('No se encuentra a la persona')
      })
  }
}
</script>

<template>
  <div>
    <h3 class="text-3xl font-medium text-gray-700">
      Eliminar una Persona
    </h3>

    <div class="relative mt-5">
      <input v-model="id" type="text" class="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Buscar Identificación a eliminar">
    </div>

    <div class="min-w-full mt-2">
      <button class="px-4 mt-2 min-w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500" @click="eliminar">
        <span>Eliminar</span>
      </button>
    </div>
  </div>
</template>
