<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
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
  <NavigationComponent />
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
  <section>
    <div class="mx-auto mt-10 container">
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

    <div class="mx-auto mt-20 flex gap-10 container">
      <div class="flex w-1/2">
        <div class="w-1/2">
          <img src="https://plus.unsplash.com/premium_photo-1661932036915-4fd90bec6e8a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxvZ2lzdGljc3xlbnwwfHwwfHx8MA%3D%3D" class="min-h-[600px] w-full object-cover" alt="">
        </div>
        <div class="ml-10 w-1/2">
          <img src="https://plus.unsplash.com/premium_photo-1661932036915-4fd90bec6e8a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxvZ2lzdGljc3xlbnwwfHwwfHx8MA%3D%3D" class="min-h-[600px] w-full object-cover" alt="">
        </div>
      </div>
      <div class="w-1/2">
        <h1 class="text-6xl font-800">
          We provide full rang of transport services
        </h1>
        <p class="mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis eum libero deserunt ex quae exercitationem repellendus quam voluptatem deleniti animi expedita, illum non possimus architecto ratione soluta facilis impedit veniam!
        </p>
      </div>
    </div>
  </section>
</template>
