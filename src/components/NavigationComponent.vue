<script setup lang="ts">
import { ref } from 'vue'
import CallRequestButton from './CallRequestButton.vue'

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="bg-white w-full shadow-md top-0 sticky z-50">
    <div class="flex items-center justify-between relative">
      <!-- Логотип -->
      <div class="bg-red-500 flex items-center">
        <img src="/logo.png" alt="logo" class="m-auto h-20 w-auto">
      </div>

      <!-- Меню (desktop) -->
      <nav class="text-gray-700 font-medium gap-8 hidden md:flex">
        <a href="#services" class="transition hover:text-red-600">Наши Услуги</a>
        <a href="#about" class="transition hover:text-red-600">О нас</a>
        <a href="#contacts" class="transition hover:text-red-600">Контакты</a>
      </nav>

      <!-- Кнопка (desktop) -->
      <div class="mr-5 hidden md:block">
        <CallRequestButton />
      </div>

      <div class="text-grey-700 mr-4 flex items-center md:hidden">
        <div class="i-mdi:whatsapp text-xl text-green mr-2" />
        <a href="tel:+77751442023" class="text-xl">+7 (775) 144 2023</a>
      </div>

      <!-- Бургер (mobile) -->
      <div class="i-mdi:menu text-2xl mr-5 md:hidden" @click="toggleMobileMenu" />

      <!-- Мобильное меню -->
      <transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          class="p-4 rounded-lg bg-white flex flex-col w-full shadow-lg items-center left-0 top-20 absolute z-50 md:hidden"
        >
          <a
            href="#services"
            class="text-lg text-gray-700 mb-4 transition-all"
            @click="toggleMobileMenu"
          >
            Наши Услуги
          </a>
          <a
            href="#about"
            class="text-lg text-gray-700 mb-4 transition-all"
            @click="toggleMobileMenu"
          >
            О нас
          </a>
          <a
            href="#contacts"
            class="text-lg text-gray-700 mb-4 transition-all"
            @click="toggleMobileMenu"
          >
            Контакты
          </a>
          <CallRequestButton />
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
