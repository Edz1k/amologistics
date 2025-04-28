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
  <main>
    <!-- Hero секция -->
    <section class="bg-[url('https://wallpapers.com/images/featured/cool-trucks-cdvn4ttk7o8geggz.jpg')] bg-gray-100 flex flex-col justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat">
      <div class="bg-black/50 inset-0 absolute z-0" />
      <p class="text-2xl text-white font-bold mt-2 text-center z-10">
        НАДЕЖНЫЙ ПОСТАВЩИК ТРАНСПОРТНЫХ УСЛУГ
      </p>
      <div class="mx-auto px-4 py-15 flex flex-col items-start z-10 container md:items-start">
        <!-- Декор -->
        <div class="h-10 hidden relative md:block">
          <div class="bg-red-500 h-2 w-[100px] absolute" />
          <div class="bg-red-500 h-[400px] w-2 absolute" />
          <div class="bg-red-500 h-2 w-[150px] top-100 absolute" />
        </div>

        <!-- Контент -->
        <div class="text-white w-full md:w-[70%]">
          <div class="text-xl leading-relaxed p-2 text-center rounded-2xl md:ml-10 md:text-left">
            <h1 class="text-5xl font-bold mb-6">
              Международные грузоперевозки из Европы в Казахстан
            </h1>
            <ul class="text-3xl font-bold pl-0 list-none space-y-3 md:pl-5">
              <li>- Комплектные авто, контейнера, вагоны</li>
              <li>- Автоконсолидация (сборные грузы)</li>
              <li>- Негабаритные перевозки (тралы, вагоны)</li>
            </ul>
          </div>
        </div>

        <!-- Кнопка звонка -->
        <a href="tel:+77751442023" class="mt-30 px-4 py-2 rounded-full bg-white inline-flex w-[250px] shadow-lg items-center justify-center space-x-3">
          <div class="p-2 rounded-full bg-red-600">
            <div class="i-mdi:phone text-xl text-white" />
          </div>
          <div class="text-sm leading-tight text-center">
            <div class="text-xs text-gray-600">Связаться с нами</div>
            <div class="text-black font-semibold">+7 775 144 2023</div>
          </div>
        </a>
      </div>
    </section>

    <!-- Почему выбирают нас -->
    <section class="py-16">
      <div class="mx-auto text-center container">
        <h2 class="text-4xl font-bold mb-4">
          Почему выбирают нас
        </h2>
        <p class="text-gray-600 mb-8">
          Мы предоставляем лучший сервис на всех этапах доставки: от расчёта стоимости до получения груза.
        </p>

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

    <!-- Заказать консультацию -->
    <section class="mt-10 py-16 bg-gray-50 flex items-center">
      <div class="mx-auto px-4 flex flex-col gap-12 container lg:flex-row">
        <!-- Текст -->
        <div class="flex flex-col w-full justify-center lg:w-1/2">
          <h2 class="text-4xl text-gray-900 font-bold md:text-6xl">
            Мы предоставляем полный спектр транспортных услуг
          </h2>
          <p class="text-gray-600 mt-6">
            Оставьте заявку — мы перезвоним вам и проконсультируем по любому вопросу, связанному с логистикой.
          </p>
        </div>

        <!-- Форма -->
        <div class="w-full lg:w-1/2">
          <CallRequestFormComponent />
        </div>
      </div>
    </section>

    <!-- Что мы перевозим -->
    <section class="py-16">
      <div class="mx-auto flex flex-col gap-12 items-center container md:flex-row">
        <!-- Карта -->
        <div class="flex w-full justify-center md:w-1/2">
          <DirectionMapComponent />
        </div>

        <!-- Список -->
        <div class="w-full md:w-1/2">
          <h2 class="text-4xl text-gray-900 font-bold mb-12 text-center md:text-left">
            Что мы перевозим
          </h2>
          <ul class="gap-8 grid sm:grid-cols-2">
            <li class="border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition items-center overflow-hidden hover:shadow-lg">
              <img src="https://amologistics.kz/assets/images/gruz07.jpg" alt="Строительные материалы" class="h-40 w-full object-cover">
              <div class="p-6 text-center">
                <span class="text-lg text-gray-800 font-semibold block">
                  Строительные материалы
                </span>
              </div>
            </li>
            <li class="border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition items-center overflow-hidden hover:shadow-lg">
              <img src="https://amologistics.kz/assets/images/gruz01.jpg" alt="Оборудование и запчасти" class="h-40 w-full object-cover">
              <div class="p-6 text-center">
                <span class="text-lg text-gray-800 font-semibold block">
                  Оборудование и запчасти
                </span>
              </div>
            </li>
            <li class="border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition items-center overflow-hidden hover:shadow-lg">
              <img src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-02c4-622f-81c9-4493d294b66b/raw?se=2025-04-28T18%3A51%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=82d3d70f-1199-55cb-8d6f-b3f437ce5860&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T21%3A03%3A04Z&ske=2025-04-28T21%3A03%3A04Z&sks=b&skv=2024-08-04&sig=fbJZxEvt6jObq2/T2fuanULtRNNFosNldrIShBBcN%2B8%3D" alt="Товары народного потребления" class="h-40 w-full object-cover">
              <div class="p-6 text-center">
                <span class="text-lg text-gray-800 font-semibold block">
                  Товары народного потребления
                </span>
              </div>
            </li>
            <li class="border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition items-center overflow-hidden hover:shadow-lg">
              <img src="https://img.belta.by/images/storage/news/with_archive/2020/000026_1597637750_403060_big.jpg" alt="Опасные вещества" class="h-40 w-full object-cover">
              <div class="p-6 text-center">
                <span class="text-lg text-gray-800 font-semibold block">
                  Опасные вещества
                </span>
              </div>
            </li>
            <li class="border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition items-center overflow-hidden hover:shadow-lg">
              <img src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-3c44-622f-8f35-27d4de22888f/raw?se=2025-04-28T19%3A34%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=6043e37a-1dad-55a2-80be-82b4159c7654&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T21%3A03%3A00Z&ske=2025-04-28T21%3A03%3A00Z&sks=b&skv=2024-08-04&sig=jNOIbi09sUPyGvpP0uK9vFNTT7d5Zf3vB6cAG6cR%2B%2BE%3D" alt="Продукты питания" class="h-40 w-full object-cover object-center">
              <div class="p-6 text-center">
                <span class="text-lg text-gray-800 font-semibold block">
                  Продукты питания
                </span>
              </div>
            </li>
            <li class="p-6 text-center border border-gray-200 rounded-2xl bg-white flex flex-col shadow transition-all items-center overflow-hidden hover:shadow-lg">
              <div class="flex h-30 w-full items-center justify-center">
                <div class="i-mdi-dots-horizontal text-4xl text-red-500" />
              </div>
              <div class="p-6 text-center">
                <span class="text-lg text-gray-800 font-semibold block">
                  И многое другое…
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Надежность -->
    <section class="py-16 bg-gray-50">
      <div class="mx-auto text-center container">
        <h2 class="text-4xl font-extrabold mb-6">
          С нами удобно и безопасно работать
        </h2>
        <p class="text-gray-600 mb-12">
          Мы несем полную ответственность за сохранность вашего груза и сроки поставки
        </p>

        <div class="gap-6 grid container lg:grid-cols-3 sm:grid-cols-2">
          <div v-for="item in services" :key="item.title" class="group p-6 rounded-lg bg-white flex flex-col shadow transition-shadow duration-300 items-center hover:shadow-lg">
            <div class="mb-4 rounded-full bg-red-500 flex h-16 w-16 transition-colors items-center justify-center group-hover:bg-red-700">
              <div :class="`i-mdi-${item.icon}`" class="text-3xl text-white" />
            </div>
            <h3 class="text-xl font-semibold text-center">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Как мы работаем -->
    <section id="about" class="py-25 bg-[url('https://t4.ftcdn.net/jpg/02/78/42/09/360_F_278420928_OEpFQsbKFJH40LH3RYIuPj4MO313M9Ea.jpg')] relative bg-cover bg-center bg-no-repeat scroll-mt-24">
      <div class="bg-black/50 inset-0 absolute z-0" />
      <div class="text-white mx-auto text-center relative z-10 container">
        <h2 class="text-5xl font-bold mb-20">
          Как мы работаем
        </h2>
        <div class="flex flex-col gap-12 justify-between md:flex-row">
          <div v-for="(step, idx) in steps" :key="idx" class="flex flex-col items-center">
            <div class="text-4xl text-white font-bold rounded-full bg-red-500 flex h-20 w-20 items-center justify-center">
              {{ step.id }}
            </div>
            <p class="text-lg text-white font-500 mt-4 max-w-[220px]">
              {{ step.label }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
