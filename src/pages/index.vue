<script setup lang="ts" generic="T extends any, O extends any">
import CallRequestFormComponent from '~/components/CallRequestFormComponent.vue'

defineOptions({
  name: 'IndexPage',
})
const services = [
  { title: 'Страхование грузов', icon: 'warehouse' },
  { title: 'Помощь в таможенном оформлении', icon: 'warehouse' },
  { title: 'Складские услуги', icon: 'warehouse' },
  { title: 'Проф. сопровождение менеджера на всех этапах', icon: 'warehouse' },
  { title: 'Проф. сопровождение менеджера на всех этапах', icon: 'warehouse' },
  { title: 'Проф. сопровождение менеджера на всех этапах', icon: 'warehouse' },
]
const cards = [
  {
    icon: 'i-mdi-currency-usd',
    title: 'Cost optimization',
    text: 'Lower operational costs and innovate by optimizing all the elements.',
  },
  {
    icon: 'i-mdi-earth',
    title: 'Reduced transit timing',
    text: 'Lessen time-to-market and increase delivery speed.',
  },
  {
    icon: 'i-mdi-warehouse',
    title: 'Warehouse operation',
    text: 'Ensure operational flows are scalable, reducing cost-to-serve.',
  },
  {
    icon: 'i-mdi-warehouse',
    title: 'Warehouse operation',
    text: 'Ensure operational flows are scalable, reducing cost-to-serve.',
  },
  {
    icon: 'i-mdi-warehouse',
    title: 'Warehouse operation',
    text: 'Ensure operational flows are scalable, reducing cost-to-serve.',
  },
  {
    icon: 'i-mdi-earth',
    title: 'Reduced transit timing',
    text: 'Lessen time-to-market and increase delivery speed.',
  },
]
</script>

<template>
  <main class="bg-[url('https://wallpapers.com/images/featured/cool-trucks-cdvn4ttk7o8geggz.jpg')] bg-gray-100 flex flex-col h-[90vh] justify-center bg-cover bg-center bg-no-repeat">
    <div class="m-auto container">
      <div class="h-10 hidden relative md:block">
        <!-- Горизонтальная линия -->
        <div class="bg-red-500 h-2 w-[100px] absolute" />
        <!-- Вертикальная линия -->
        <div class="bg-red-500 h-50 w-2 absolute" />

        <div class="bg-red-500 h-2 w-[150px] top-50 absolute" />
      </div>

      <div class="w-1/2">
        <div class="text-white ml-10">
          <p>
            Добро пожаловать на главную страницу нашего сайта!
          </p>
          <h1 class="text-3xl font-bold mb-4">
            Logistics & <br> Transport Company
          </h1>
        </div>
      </div>
      <a href="tel:+77751442023">
        <div class="mt-30 px-4 py-2 rounded-full bg-white flex w-[250px] shadow-lg items-center space-x-3">
          <div class="text-white p-2 rounded-full bg-red-600">
            <div class="i-mdi:phone text-xl" />
          </div>
          <div class="text-sm leading-tight">
            <div class="text-xs text-gray-600">
              Voice Call
            </div>
            <div class="text-black font-semibold">
              +77751442023
            </div>
          </div>
        </div>
      </a>
    </div>
  </main>
  <section class="mt-20">
    <div class="mx-auto container">
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">
          Our Services
        </h1>
        <p class="text-gray-600 mb-8">
          We offer a wide range of logistics and transport services to meet your needs.
        </p>
      </div>
      <div class="flex flex-wrap gap-6 justify-center">
        <ServiceCardComponent
          v-for="(item, index) in cards"
          :key="index"
          class="mb-10"
          :icon="item.icon"
          :title="item.title"
          :text="item.text"
          :number="index + 1"
        />
      </div>
    </div>
  </section>
  <section class="mt-10 bg-gray-50 flex h-[80vh] items-center">
    <div class="mx-auto px-4 flex flex-col gap-12 container lg:flex-row">
      <!-- Левая часть: заголовок и текст -->
      <div class="flex flex-col w-full justify-center lg:w-1/2">
        <h1 class="text-4xl text-gray-900 font-bold md:text-6xl dark:text-white">
          Мы предоставляем полный спектр транспортных услуг
        </h1>
        <p class="text-gray-600 mt-6 dark:text-gray-300">
          Оставьте заявку — мы перезвоним вам и проконсультируем по любому вопросу, связанному с логистикой.
        </p>
      </div>

      <!-- Правая часть: форма -->
      <div class="flex flex-col w-full lg:w-1/2">
        <CallRequestFormComponent />
      </div>
    </div>
  </section>
  <section>
    <div>
      <DirectionMapComponent />
    </div>
  </section>
  <section class="py-16 bg-gray-50">
    <!-- Заголовок -->
    <div class="mx-auto mb-12 text-center max-w-3xl">
      <h2 class="text-4xl font-extrabold">
        С нами удобно и безопасно работать
      </h2>
      <p class="text-gray-600 mt-4">
        Мы несем полную ответственность за сохранность вашего груза и сроки поставки
      </p>
    </div>

    <div class="mx-auto px-4 gap-6 grid container lg:grid-cols-3 sm:grid-cols-2">
      <div
        v-for="(item, idx) in services"
        :key="idx"
        class="group p-6 rounded-lg bg-white shadow transition-shadow duration-300 hover:shadow-lg"
      >
        <!-- Круг + иконка -->
        <div
          class="mx-auto mb-4 rounded-full bg-red-500 flex h-16 w-16 transition-colors items-center justify-center group-hover:bg-red-700"
        >
          <!-- Вот здесь: div с классом i-mdi:… -->
          <div
            class="text-white h-8 w-8" :class="[
              `i-mdi-${item.icon}`, // цвет
            ]"
          />
        </div>

        <!-- Заголовок карточки -->
        <h3 class="text-xl font-semibold text-center">
          {{ item.title }}
        </h3>
      </div>
    </div>
  </section>
</template>
