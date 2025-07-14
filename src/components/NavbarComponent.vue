<script setup lang="ts">
import type { MenuItemCommandEvent, MenuItem as PrimeVueMenuItem } from 'primevue/menuitem'
import { Icon } from '@iconify/vue'
import TieredMenu from 'primevue/tieredmenu'
import { onMounted, onUnmounted, ref } from 'vue'
import { useHeroState } from '~/composables/useHeroState'
import ModalCallComponent from './ModalCallComponent.vue'

interface NavItem {
  name: string
  href?: string
  command?: (event: MenuItemCommandEvent) => void
  items?: NavItem[]
  icon?: string
  class?: string
  _mobileExpanded?: boolean
  serviceKey?: string
}

const { setActiveService } = useHeroState()
const navItems = ref<NavItem[]>([
  {
    name: 'Наши Услуги',
    href: '#services',
    command: () => setActiveService('default'),
    serviceKey: 'default',
  },
  {
    name: 'О нас',
    href: '#about',
    command: () => setActiveService('default'),
    serviceKey: 'default',
  },
  {
    name: 'Контакты',
    href: '#contacts',
    command: () => setActiveService('default'),
    serviceKey: 'default',
  },
  {
    name: 'Сервисы',
    icon: 'mdi:chevron-down',
    items: [
      {
        name: 'Переезды',
        icon: 'mdi:truck-fast',
        href: '#relocation',
        command: () => setActiveService('relocation'),
        serviceKey: 'relocation',
      },
      {
        name: 'Консолидация',
        icon: 'mdi:warehouse',
        href: '#consolidation',
        command: () => setActiveService('consolidation'),
        serviceKey: 'consolidation',
      },
      {
        name: 'ЕвроДоставка',
        icon: 'mdi:earth',
        href: '#euro-delivery',
        command: () => setActiveService('euro-delivery'),
        serviceKey: 'euro-delivery',
      },
      {
        name: 'Негабарит',
        icon: 'mdi:truck-outline',
        href: '#oversize',
        command: () => setActiveService('oversize'),
        serviceKey: 'oversize',
      },
    ],
  },
])

const isMobileMenuOpen = ref(false)
const isReady = ref(false)
const isScrolled = ref(false)
const menu = ref<InstanceType<typeof TieredMenu> | null>(null)
const showCallModal = ref(false)

const tieredMenuModel = ref<PrimeVueMenuItem[]>([])

function toggleMenu(event: Event, item: NavItem) {
  if (item.items && menu.value) {
    tieredMenuModel.value = item.items.map(subItem => ({
      label: subItem.name,
      icon: subItem.icon,
      command: subItem.command,
      url: subItem.href,
    }))
    menu.value.toggle(event)
  }
}

const openSubMenu = ref<string | null>(null)

function toggleSubMenu(itemName: string) {
  openSubMenu.value = openSubMenu.value === itemName ? null : itemName
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    openSubMenu.value = null
  }
}

function handleMobileSublinkClick(subItem: NavItem) {
  if (subItem.command) {
    subItem.command({ originalEvent: new Event('click'), item: subItem as any })
  }
  toggleMobileMenu()
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

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
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
    <div class="mx-auto px-4 py-1 flex items-center justify-between container">
      <a href="/" class="flex items-center" @click.prevent="setActiveService('default')">
        <div class="p-2 rounded bg-red-500 overflow-hidden">
          <img src="/logo.png" alt="Logo" class="h-20 w-auto scale-140 transform object-cover">
        </div>
      </a>

      <nav class="hidden items-center space-x-8 md:flex">
        <template v-for="item in navItems" :key="item.name">
          <!-- 1. Выпадающее меню (если есть items) -->
          <button
            v-if="item.items"
            type="button"
            aria-haspopup="true"
            :aria-controls="`tieredmenu_${item.name}`"
            class="p-link focus:outline-none text-base text-gray-700 font-medium flex cursor-pointer transition items-center hover:text-red-600"
            @click="toggleMenu($event, item)"
          >
            <span>{{ item.name }}</span>
            <Icon v-if="item.icon" :icon="item.icon" class="ml-1 h-5 w-5" />
          </button>

          <!-- 2. Элемент с командой (если нет items, но есть command - для "Наши Услуги", "О нас", "Контакты", "Заказать звонок") -->
          <button
            v-else-if="item.command"
            type="button"
            class="p-link text-base text-gray-700 font-medium transition hover:text-red-600"
            @click="item.command({ originalEvent: $event, item: item as any })"
          >
            <Icon v-if="item.icon" :icon="item.icon" class="mr-1 h-5 w-5" />
            <span>{{ item.name }}</span>
          </button>

          <!-- 3. Просто ссылка (если нет items и command, но есть href - запасной вариант) -->
          <a
            v-else-if="item.href"
            :href="item.href"
            class="text-base text-gray-700 font-medium transition hover:text-red-600"
          >
            {{ item.name }}
          </a>
        </template>
      </nav>

      <TieredMenu
        ref="menu"
        :model="tieredMenuModel"
        :popup="true"
        class="w-full md:w-56"
      />

      <div class="hidden md:block">
        <ModalCallComponent v-model:visible="showCallModal" />
        <a href="tel:+77051245988" class="text-gray-700 mt-2 flex items-center">
          <div class="i-mdi-phone text-xl text-green-500 mr-2" />
          <span class="text-sm">+7 (705) 124-59-88</span>
        </a>
      </div>

      <div class="flex items-center space-x-4 md:hidden">
        <a href="https://wa.me/77051245988" target="_blank" class="text-gray-700 flex items-center">
          <div class="i-mdi-whatsapp text-xl text-green-500 mr-2" />
          <span class="text-sm">+7 (705) 124-59-88</span>
        </a>
        <div
          class="text-3xl text-gray-700 flex h-8 w-8 cursor-pointer transition-all duration-300 items-center justify-center"
          @click="toggleMobileMenu"
        >
          <div :class="isMobileMenuOpen ? 'i-mdi-close' : 'i-mdi-menu'" />
        </div>
      </div>
    </div>

    <nav
      v-if="isMobileMenuOpen"
      class="bg-white shadow-lg md:hidden"
    >
      <div class="px-4 py-6 flex flex-col items-center space-y-4">
        <template v-for="item in navItems" :key="item.name">
          <!-- 1. Выпадающее меню (аккордеон) -->
          <div v-if="item.items" class="text-center w-full">
            <button
              class="text-lg text-gray-700 inline-flex w-full transition items-center justify-center hover:text-red-600"
              @click="toggleSubMenu(item.name)"
            >
              <span>{{ item.name }}</span>
              <Icon
                icon="mdi:chevron-down"
                class="ml-1 h-5 w-5 transition-transform duration-300"
                :class="{ 'rotate-180': openSubMenu === item.name }"
              />
            </button>

            <div v-if="openSubMenu === item.name" class="overflow-hidden">
              <div class="mt-3 flex flex-col items-center space-y-3">
                <a
                  v-for="subItem in item.items"
                  :key="subItem.name"
                  :href="subItem.href"
                  class="text-base text-gray-600 block hover:text-red-600"
                  @click="handleMobileSublinkClick(subItem)"
                >
                  {{ subItem.name }}
                </a>
              </div>
            </div>
          </div>
          <!-- 2. Элемент с командой -->
          <button
            v-else-if="item.command"
            type="button"
            class="p-link text-lg text-gray-700 transition hover:text-red-600"
            @click="item.command({ originalEvent: $event, item: item as any }); toggleMobileMenu();"
          >
            <Icon v-if="item.icon" :icon="item.icon" class="mr-1 h-5 w-5" />
            <span>{{ item.name }}</span>
          </button>
          <!-- 3. Просто ссылка -->
          <a
            v-else-if="item.href"
            :href="item.href"
            class="text-lg text-gray-700 transition hover:text-red-600"
            @click="toggleMobileMenu()"
          >
            {{ item.name }}
          </a>
        </template>

        <div class="pt-4">
          <ModalCallComponent v-model:visible="showCallModal" />
        </div>
      </div>
    </nav>
  </header>
  <ModalCallComponent v-model:visible="showCallModal" />
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

.fade-sub-enter-active,
.fade-sub-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-sub-enter-from,
.fade-sub-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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
