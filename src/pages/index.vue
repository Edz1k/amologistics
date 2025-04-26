<script setup lang="ts" generic="T extends any, O extends any">
import CallRequestFormComponent from '~/components/CallRequestFormComponent.vue'

defineOptions({
  name: 'IndexPage',
})
const steps = [
  { id: '01', label: 'Вы обращаетесь за просчетом стоимости доставки' },
  { id: '02', label: 'Наши специалисты производят расчет и подбирают оптимальный маршрут' },
  { id: '03', label: 'Заключение договора' },
  { id: '04', label: 'Доставка груза и подписание документов' },
  { id: '05', label: 'Груз доставлен, вы довольны результатом' },
]
const services = [
  { title: 'Страхование грузов', icon: 'shield-check' },
  { title: 'Помощь в таможенном оформлении', icon: 'file-certificate-outline' },
  { title: 'Складские услуги', icon: 'warehouse' },
  { title: 'Проф. сопровождение менеджера на всех этапах', icon: 'warehouse' },
  { title: 'Проф. сопровождение менеджера на всех этапах', icon: 'account-tie' },
  { title: 'Страхование грузов', icon: 'shield-check' },
]
const cards = [
  {
    icon: 'i-mdi-sync',
    title: 'Гибкость',
    text: 'Перевозка разных категорий грузов на любые расстояния',
  },
  {
    icon: 'i-mdi-earth',
    title: 'География',
    text: 'Заберем ваш товар из любого города',
  },
  {
    icon: 'i-mdi-school',
    title: 'Профессионализм',
    text: 'Наши менеджеры имеют большой опыт в сфере международной логистики',
  },
  {
    icon: 'i-mdi-clock-time-four-outline',
    title: 'Доступность ',
    text: 'Мы всегда на связи 24/7. ',
  },
  {
    icon: 'i-mdi-lock-check-outline',
    title: 'Надежность',
    text: 'Обязательное страхование грузов',
  },
  {
    icon: 'i-mdi-handshake',
    title: 'Сотрудничество',
    text: 'Личный менеджер предлагает решения, ориентируясь на Ваши потребности и приоритеты',
  },
  {
    icon: 'i-mdi-currency-usd',
    title: 'Выгода',
    text: 'Гибкие условия оплаты и лучшие цены',
  },
]
</script>

<template>
  <main
    class="bg-[url('https://wallpapers.com/images/featured/cool-trucks-cdvn4ttk7o8geggz.jpg')] bg-gray-100 flex flex-col h-[90vh] justify-center bg-cover bg-no-repeat"
  >
    <div class="m-auto container">
      <div class="h-10 hidden relative md:block">
        <!-- Горизонтальная линия -->
        <div class="bg-red-500 h-2 w-[100px] absolute" />
        <!-- Вертикальная линия -->
        <div class="bg-red-500 h-[400px] w-2 absolute" />

        <div class="bg-red-500 h-2 w-[150px] top-100 absolute" />
      </div>

      <div class="w-1/2">
        <div class="text-xl line-height-relaxed ml-10 p-6 border border-gray-200/50 rounded-2xl bg-white/30 shadow-2xl backdrop-blur-sm">
          <p class="mb-4">
            НАДЕЖНЫЙ ПОСТАВЩИК ТРАНСПОРТНЫХ УСЛУГ
          </p>
          <h1 class="text-3xl font-bold mb-6">
            АМОЛОГИСТИК – Международные грузоперевозки из Европы в Казахстан
          </h1>
          <ul class="text-2xl pl-5 list-none space-y-3">
            <li>- Комплектные авто, контейнера, вагоны</li>
            <li>- Автоконсолидация (сборные грузы)</li>
            <li>- Негабаритные перевозки (траллы, вагоны)</li>
          </ul>
        </div>
      </div>
      <a href="tel:+77751442023">
        <div class="mt-30 px-4 py-2 rounded-full bg-white flex w-[250px] shadow-lg items-center space-x-3">
          <div class="text-white p-2 rounded-full bg-red-600">
            <div class="i-mdi:phone text-xl" />
          </div>
          <div class="text-sm leading-tight">
            <div class="text-xs text-gray-600">
              Позвоните нам
            </div>
            <div class="text-black font-semibold">
              +77751442023
            </div>
          </div>
        </div>
      </a>
    </div>
  </main>
  <section class="py-16">
    <div class="mx-auto container">
      <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">
          Почему выбирают нас
        </h1>
        <p class="text-gray-600 mb-8">
          Мы предоставляем лучший сервис на всех этапах доставки: от расчёта стоимости до получения груза.
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
  <section class="mt-10 py-16 bg-gray-50 flex items-center">
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
    <div class="mx-auto py-16 flex flex-col gap-12 items-center container md:flex-row">
      <!-- Левая часть: карта -->
      <div class="flex w-full justify-center md:w-1/2">
        <DirectionMapComponent />
      </div>

      <!-- Правая часть: список -->
      <div class="w-full md:w-1/2">
        <h2 class="text-4xl text-gray-900 font-bold mb-12 text-center md:text-left">
          Что мы перевозим
        </h2>

        <ul class="gap-8 grid sm:grid-cols-2">
          <li class="p-6 text-center border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition-all items-center hover:shadow-lg">
            <div class="i-mdi-truck text-5xl text-red-500 mb-4" />
            <span class="text-lg text-gray-800 font-semibold">
              Строительные материалы
            </span>
          </li>
          <li class="p-6 text-center border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition-all items-center hover:shadow-lg">
            <div class="i-mdi-cog-outline text-5xl text-red-500 mb-4" />
            <span class="text-lg text-gray-800 font-semibold">
              Оборудование и запчасти
            </span>
          </li>
          <li class="p-6 text-center border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition-all items-center hover:shadow-lg">
            <div class="i-mdi-cart-outline text-5xl text-red-500 mb-4" />
            <span class="text-lg text-gray-800 font-semibold">
              Товары народного потребления
            </span>
          </li>
          <li class="p-6 text-center border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition-all items-center hover:shadow-lg">
            <div class="i-mdi-alert-octagon-outline text-5xl text-red-500 mb-4" />
            <span class="text-lg text-gray-800 font-semibold">
              Опасные вещества
            </span>
          </li>
          <li class="p-6 text-center border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition-all items-center hover:shadow-lg">
            <div class="i-mdi-food-apple text-5xl text-red-500 mb-4" />
            <span class="text-lg text-gray-800 font-semibold">
              Продукты питания
            </span>
          </li>
          <li class="p-6 text-center border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition-all items-center hover:shadow-lg">
            <div class="i-mdi-dots-horizontal text-5xl text-red-500 mb-4" />
            <span class="text-lg text-gray-800 font-semibold">
              И многое другое…
            </span>
          </li>
        </ul>
      </div>
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
          <div
            class="text-white h-8 w-8" :class="[
              `i-mdi-${item.icon}`,
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
  <section class="py-16">
    <div class="mx-auto text-center container">
      <h2 class="text-4xl font-bold mb-20">
        Как мы работаем
      </h2>

      <div class="flex flex-col gap-12 justify-between md:flex-row">
        <div
          v-for="(step, idx) in steps"
          :key="idx"
          class="flex flex-col items-center"
        >
          <div class="text-2xl text-white font-bold rounded-full bg-red-500 flex h-16 w-16 items-center justify-center">
            {{ step.id }}
          </div>
          <p class="text-gray-700 mt-4 max-w-[220px]">
            {{ step.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
