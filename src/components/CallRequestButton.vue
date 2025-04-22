<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

function submitForm() {
  closeModal()
}
</script>

<template>
  <div>
    <!-- Кнопка -->
    <button
      class="text-white px-5 py-2 rounded-lg bg-red-500 w-full transition transition-all duration-300 hover:bg-red-600"
      @click="openModal"
    >
      Заказать звонок
    </button>

    <!-- Модалка -->
    <div
      v-if="isOpen"
      class="bg-black/50 flex items-center inset-0 justify-center fixed z-50"
    >
      <div class="p-6 rounded-2xl bg-white max-w-md w-full shadow-xl relative">
        <button
          class="text-gray-500 right-3 top-3 absolute hover:text-gray-700"
          @click="closeModal"
        >
          ✕
        </button>

        <h2 class="text-xl font-semibold mb-4">
          Заказать звонок
        </h2>

        <form class="flex flex-col gap-4" @submit.prevent="submitForm">
          <input
            type="text"
            placeholder="Ваше имя"
            class="px-4 py-2 border rounded-lg"
            required
          >
          <input
            type="tel"
            placeholder="Телефон"
            class="px-4 py-2 border rounded-lg"
            required
          >
          <button
            type="submit"
            class="text-white px-4 py-2 rounded-lg bg-red-600 transition duration-300 hover:bg-red-700"
            @click="submitForm"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
