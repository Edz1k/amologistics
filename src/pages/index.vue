<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
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
</template>
