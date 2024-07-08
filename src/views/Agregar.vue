<script setup lang="ts">
import { ref } from 'vue'
import router from '../router'
import { postInstance } from '../Services/crud'

const nuevo = ref({
  nombre: '',
  correo: '',
})
function register() {
  console.log(nuevo)
  const info = postInstance('', nuevo.value)
  router.push('/')
}
</script>

<template>
  <div>
    <h3 class="h3">
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
                class="input"
                type="text"
              >
            </div>

            <div>
              <label class="text-gray-700" for="emailAddress">Correo Electrónico</label>
              <input
                v-model="nuevo.correo"
                class="input"
                type="email"
              >
            </div>
          </div>

          <div class="mt-4">
            <div class="min-w-full mt-2">
              <button class="button-primary">
                <span>Registrar</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
