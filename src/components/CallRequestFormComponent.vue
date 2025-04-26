<script setup lang="ts">
import InputMask from 'primevue/inputmask'
import InputText from 'primevue/inputtext'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'

const toast = useToast()
const { myFormTeleg } = useUser()

const userCall = ref({
  name: '',
  phoneNumber: '',
})

const errors = ref({
  name: '',
  phoneNumber: '',
})

function validateForm() {
  let isValid = true
  errors.value = { name: '', phoneNumber: '' }

  if (!userCall.value.name.trim()) {
    errors.value.name = 'Имя обязательно'
    isValid = false
  }

  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/
  if (!phoneRegex.test(userCall.value.phoneNumber)) {
    errors.value.phoneNumber = 'Введите корректный номер'
    isValid = false
  }

  return isValid
}

function handleSubmit() {
  if (!validateForm()) {
    toast.add({ severity: 'warn', summary: 'Ошибка', detail: 'Проверьте данные', life: 3000 })
    return
  }

  myFormTeleg(userCall.value.name, userCall.value.phoneNumber)
  toast.add({ severity: 'success', summary: 'Успешно', detail: 'Ваша заявка принята', life: 3000 })

  userCall.value.name = ''
  userCall.value.phoneNumber = ''
}
</script>

<template>
  <div class="p-8 border border-gray-200 rounded-2xl bg-white w-full shadow-xl dark:border-gray-700 dark:bg-gray-900">
    <h2 class="text-2xl text-gray-800 font-semibold mb-6 dark:text-white">
      Заказать звонок
    </h2>
    <form class="flex flex-col space-y-5" @submit.prevent="handleSubmit">
      <!-- Имя -->
      <div>
        <label for="name" class="text-gray-700 mb-1 block dark:text-gray-300">Имя</label>
        <InputText
          v-model="userCall.name"
          class="input-field" :class="[errors.name && 'p-invalid']"
          placeholder="Ваше имя"
        />
        <p v-if="errors.name" class="text-sm text-red-500 mt-1">
          {{ errors.name }}
        </p>
      </div>

      <!-- Телефон -->
      <div>
        <label for="phone" class="text-gray-700 mb-1 block dark:text-gray-300">Телефон</label>
        <InputMask
          v-model="userCall.phoneNumber"
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
          class="input-field" :class="[errors.phoneNumber && 'p-invalid']"
        />
        <p v-if="errors.phoneNumber" class="text-sm text-red-500 mt-1">
          {{ errors.phoneNumber }}
        </p>
      </div>

      <!-- Кнопка -->
      <button
        type="submit"
        class="text-white font-semibold py-3 rounded-lg bg-red-500 w-full transition-all duration-300 hover:bg-red-700"
      >
        Позвоните мне
      </button>
    </form>
  </div>
</template>

<style scoped>
 .input-field {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db; /* нейтральный серый */
  transition: border 0.2s ease;
}
.p-inputtext:enabled:focus {
  outline: black;
  border: 1px solid black; /* красный */
}
</style>
