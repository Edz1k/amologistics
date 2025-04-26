<script setup lang="ts">
import { ref } from 'vue'
import ModalCallComponent from './ModalCallComponent.vue'

interface NavItem {
  name: string
  href: string
}

const navItems = ref<NavItem[]>([
  { name: 'Наши Услуги', href: '#services' },
  { name: 'О нас', href: '#about' },
  { name: 'Контакты', href: '#contacts' },
])

const isMobileMenuOpen = ref(false)
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="bg-white w-full shadow-md top-0 sticky z-50">
    <div class="mx-auto px-4 py-3 flex items-center justify-between container">
      <!-- Логотип -->
      <a href="/" class="flex items-center">
        <div class="p-2 rounded bg-red-500">
          <img src="/logo.png" alt="Logo" class="h-20 w-auto">
        </div>
      </a>

      <!-- Десктоп-навигация -->
      <nav class="hidden space-x-8 md:flex">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="text-gray-700 transition hover:text-red-600"
        >
          {{ item.name }}
        </a>
      </nav>

      <!-- Десктоп-кнопка -->
      <div class="hidden md:block">
        <ModalCallComponent />
      </div>

      <!-- Мобильный блок с телефоном и бургером -->
      <div class="flex items-center space-x-4 md:hidden">
        <a href="tel:+77751442023" class="text-gray-700 flex items-center">
          <i class="i-mdi:whatsapp text-xl text-green-500 mr-2" />
          <span class="text-sm">+7 (775) 144-20-23</span>
        </a>
        <!-- Бургер-иконка как кликабельный div -->
        <div
          class="i-mdi:menu text-4xl text-gray-700 cursor-pointer"
          @click="toggleMobileMenu"
        />
      </div>
    </div>

    <!-- Мобильное меню -->
    <transition name="fade">
      <nav
        v-if="isMobileMenuOpen"
        class="bg-white shadow-lg md:hidden"
      >
        <ul class="py-4 flex flex-col items-center space-y-4">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="text-lg text-gray-700 transition hover:text-red-600"
              @click="toggleMobileMenu"
            >
              {{ item.name }}
            </a>
          </li>
          <li>
            <CallRequestButton />
          </li>
        </ul>
      </nav>
    </transition>
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
