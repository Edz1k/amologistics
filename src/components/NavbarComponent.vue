<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import ModalCallComponent from './ModalCallComponent.vue'

interface NavItem {
  name: string
  href?: string
  to?: string
  icon?: string
  items?: NavItem[]
  _mobileExpanded?: boolean
}

const navItems = ref<NavItem[]>([
  { name: 'Наши Услуги', href: '#services' },
  { name: 'О нас', href: '#about' },
  { name: 'Контакты', href: '#contacts' },
  {
    name: 'Сервисы',
    icon: 'mdi:chevron-down',
    items: [
      { name: 'Релокация', icon: 'mdi:truck-fast', to: '/relocation' },
      { name: 'Сборка', icon: 'mdi:warehouse', to: '/consolidation' },
      { name: 'Импорт', icon: 'mdi:earth', to: '/eurodelivery' },
      { name: 'Спецгрузы', icon: 'mdi:truck-outline', to: '/oversize' },
    ],
  },
])

const isMobileMenuOpen = ref(false)
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    navItems.value.forEach((item) => {
      if (item.items)
        item._mobileExpanded = false
    })
  }
}

const isReady = ref(false)
const isScrolled = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  setTimeout(() => {
    isReady.value = true
  }, 100)
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="bg-white w-full shadow-md top-0 sticky z-50"
    :class="[
      isReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
      isScrolled ? 'shadow-lg' : 'shadow-md',
    ]"
  >
    <div class="mx-auto px-4 py-1 flex items-center justify-between container">
      <RouterLink to="/" class="flex items-center">
        <div class="p-2 rounded bg-red-500">
          <img src="/logo.png" alt="Logo" class="h-20 w-auto">
        </div>
      </RouterLink>

      <nav class="hidden space-x-8 md:flex">
        <template v-for="item in navItems" :key="item.name">
          <div v-if="item.items" class="group relative">
            <button
              class="p-link text-gray-700 flex h-full transition items-center hover:text-red-600"
              aria-haspopup="true"
              :aria-expanded="item.items ? 'true' : 'false'"
            >
              {{ item.name }}
              <i :class="item.icon" class="ml-1" />
            </button>
            <div
              class="top-full mt-0.5 rounded-md bg-white opacity-0 min-w-[200px] invisible shadow-lg origin-top scale-y-0 transform transition-all duration-300 left-0 absolute z-50 overflow-hidden group-hover:opacity-100 group-hover:visible group-hover:scale-y-100"
            >
              <RouterLink
                v-for="subItem in item.items"
                :key="subItem.name"
                :to="subItem.to!"
                class="text-gray-700 px-4 py-2 flex block transition-colors items-center hover:bg-gray-100"
                @click="isMobileMenuOpen = false"
              >
                <i v-if="subItem.icon" :class="subItem.icon" class="mr-2" />
                {{ subItem.name }}
              </RouterLink>
            </div>
          </div>
          <a
            v-else
            :href="item.href"
            class="text-gray-700 transition hover:text-red-600"
          >
            {{ item.name }}
          </a>
        </template>
      </nav>

      <div class="hidden md:block">
        <ModalCallComponent />

        <a href="tel:+77751442023" class="text-gray-700 mt-2 flex items-center">
          <div class="i-mdi:phone text-xl text-green-500 mr-2" />
          <span class="text-sm">+7 (775) 144-20-23</span>
        </a>
      </div>

      <div class="flex items-center space-x-4 md:hidden">
        <a href="tel:+77751442023" class="text-gray-700 flex items-center">
          <i class="i-mdi:whatsapp text-xl text-green-500 mr-2" />
          <span class="text-sm">+7 (775) 144-20-23</span>
        </a>
        <div
          class="i-mdi:menu text-4xl text-gray-700 cursor-pointer"
          @click="toggleMobileMenu"
        />
      </div>
    </div>

    <transition name="fade">
      <nav
        v-if="isMobileMenuOpen"
        class="bg-white shadow-lg md:hidden"
      >
        <ul class="py-4 flex flex-col items-center space-y-4">
          <li v-for="item in navItems" :key="item.name">
            <template v-if="item.items">
              <div
                class="text-lg text-gray-700 flex cursor-pointer transition items-center hover:text-red-600"
                @click="item._mobileExpanded = !item._mobileExpanded"
              >
                {{ item.name }}
                <i :class="item._mobileExpanded ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="ml-2" />
              </div>
              <ul v-if="item._mobileExpanded" class="mt-4 pl-4 border-l-2 border-gray-200 space-y-4">
                <li v-for="subItem in item.items" :key="subItem.name">
                  <RouterLink
                    :to="subItem.to!"
                    class="text-base text-gray-600 flex transition items-center hover:text-red-500"
                    @click="toggleMobileMenu"
                  >
                    <i v-if="subItem.icon" :class="subItem.icon" class="mr-2" />
                    {{ subItem.name }}
                  </RouterLink>
                </li>
              </ul>
            </template>
            <a
              v-else
              :href="item.href"
              class="text-lg text-gray-700 transition hover:text-red-600"
              @click="toggleMobileMenu"
            >
              {{ item.name }}
            </a>
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

.p-link {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-align: left;
  outline: inherit;
  color: inherit;
}
</style>
