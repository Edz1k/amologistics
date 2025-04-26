<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
const isReady = ref(false)
const isScrolled = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  }, 100)

  window.addEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="bg-white w-full transition-all duration-500 top-0 sticky z-50"
    :class="[
      isReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
      isScrolled ? 'shadow-lg' : 'shadow-md',
    ]"
  >
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

      <!-- Мобильный блок -->
      <div class="flex items-center space-x-4 md:hidden">
        <a href="tel:+77751442023" class="text-gray-700 flex items-center">
          <div class="i-mdi-whatsapp text-xl text-green-500 mr-2" />
          <span class="text-sm">+7 (775) 144-20-23</span>
        </a>
        <!-- Бургер -->
        <div
          class="flex flex-col h-8 w-8 cursor-pointer justify-between relative"
          @click="toggleMobileMenu"
        >
          <span
            class="bg-gray-700 h-0.5 block transition-all duration-300" :class="[
              isMobileMenuOpen ? 'rotate-45 translate-y-3' : '',
            ]"
          />
          <span
            class="bg-gray-700 h-0.5 block transition-all duration-300" :class="[
              isMobileMenuOpen ? 'opacity-0' : '',
            ]"
          />
          <span
            class="bg-gray-700 h-0.5 block transition-all duration-300" :class="[
              isMobileMenuOpen ? '-rotate-45 -translate-y-3' : '',
            ]"
          />
        </div>
      </div>
    </div>

    <!-- Мобильное меню -->
    <transition name="fade-scale">
      <nav
        v-if="isMobileMenuOpen"
        class="bg-white shadow-lg md:hidden"
      >
        <ul class="py-6 flex flex-col items-center space-y-6">
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
            <ModalCallComponent />
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
/* Плавная анимация fade + scale для мобильного меню */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Плавная анимация появления хедера */
</style>
