<script setup lang="ts">
import { ref } from 'vue'
import { deleteInstance } from '../Services/crud'
import router from '../router'

const id = ref(0)

function eliminar() {
  const confirmacion = confirm('Estás seguro?')
  if (confirmacion) {
    const deleted = deleteInstance(`${id.value}`, null)
    deleted.then((res) => {
      alert('Persona eliminada.')
      router.push('/')
    })
      .catch((error) => {
        alert(`Persona que no existía con anterioridad.\n${error}`)
      })
  }
}
</script>

<template>
  <div>
    <h3 class="h3">
      Eliminar una Persona
    </h3>

    <div class="relative mt-5">
      <input v-model="id" type="text" class="input" placeholder="Buscar Identificación a eliminar">
    </div>

    <div class="min-w-full mt-2">
      <button class="px-4 mt-2 min-w-full py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500" @click="eliminar">
        <span>Eliminar</span>
      </button>
    </div>
  </div>
</template>
