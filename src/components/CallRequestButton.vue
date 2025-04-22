<script setup lang="ts">
import Dialog from 'primevue/dialog'
import InputMask from 'primevue/inputmask'
import InputText from 'primevue/inputtext'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'
import { useUser } from '~/composables/useCall'

const toast = useToast()
const { myFormTeleg } = useUser()

const visible = ref(false)
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

function onSubmit() {
  if (!validateForm()) {
    toast.add({ severity: 'warn', summary: 'Ошибка', detail: 'Проверьте данные', life: 3000 })
    return
  }

  myFormTeleg(userCall.value.name, userCall.value.phoneNumber)
  toast.add({ severity: 'success', summary: 'Успешно', detail: 'Ваша заявка принята', life: 3000 })
  clearData()
}

function clearData() {
  userCall.value = { name: '', phoneNumber: '' }
  visible.value = false
}
</script>

<template>
  <div class="askcall">
    <button
      class="text-white px-5 py-2 rounded-lg bg-red-500 w-full transition transition-all duration-300 hover:bg-red-600"
      @click="visible = true"
    >
      Заказать звонок
    </button>

    <Dialog
      v-model:visible="visible"
      modal
      header="Заказать звонок"
      class="rounded-2xl max-w-md w-full"
    >
      <div class="p-fluid px-1 flex flex-col gap-4">
        <!-- Имя -->
        <div>
          <InputText
            v-model="userCall.name"
            class="input-field" :class="[errors.name && 'p-invalid']"
            placeholder="Ваше имя"
          />
        </div>

        <!-- Телефон -->
        <div>
          <InputMask
            v-model="userCall.phoneNumber"
            mask="+7 (999) 999-99-99"
            placeholder="+7 (___) ___-__-__"
            class="input-field" :class="[errors.phoneNumber && 'p-invalid']"
          />
        </div>
      </div>

      <template #footer>
        <div class="flex gap-2 justify-end">
          <!-- Кнопка Сбросить -->
          <button
            class="text-white px-4 py-2 rounded-lg bg-red-500 flex gap-2 transition-all duration-200 items-center hover:bg-red-600"
            @click="clearData"
          >
            <i class="i-mdi:close text-lg" />
            <span>Сбросить</span>
          </button>

          <!-- Кнопка Отправить -->
          <button
            class="text-white px-4 py-2 rounded-lg bg-green-500 flex gap-2 transition-all duration-200 items-center hover:bg-green-600"
            @click="onSubmit"
          >
            <i class="i-mdi:check text-lg" />
            <span>Отправить</span>
          </button>
        </div>
      </template>
    </Dialog>
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
