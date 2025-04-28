<script setup lang="ts">

</script>

<template>
  <footer class="text-white py-16 bg-gray-800">
    <div class="mx-auto flex flex-col gap-12 container md:flex-row md:justify-between">
      <!-- Левая часть -->
      <div class="w-full md:w-[45%]">
        <div class="mb-10 text-center md:text-left">
          <h1 class="text-4xl font-bold mb-8">
            Остались вопросы?
          </h1>
          <p class="text-xl font-semibold">
            Отправьте заявку, и наш специалист свяжется с вами в ближайшее время, чтобы ответить на все ваши вопросы.
          </p>
        </div>
        <CallRequestFormComponent />
      </div>

      <!-- Правая часть -->
      <div class="flex flex-col gap-15 w-full md:w-1/3">
        <!-- Номер -->
        <div class="flex gap-4 items-start">
          <div class="i-mdi-phone-outline text-3xl shrink-0" />
          <div>
            <h3 class="text-lg font-bold mb-2 uppercase">
              Наш номер
            </h3>
            <p>+7 747 425 25 83</p>
            <p>+7 705 124 59 88</p>
          </div>
        </div>

        <!-- Почта -->
        <div class="flex gap-4 items-start">
          <div class="i-mdi-email-outline text-3xl shrink-0" />
          <div>
            <h3 class="text-lg font-bold mb-2 uppercase">
              Наша электронная почта
            </h3>
            <p>Info@amologistics.kz</p>
          </div>
        </div>

        <!-- Часы работы -->
        <div class="flex gap-4 items-start">
          <div class="i-mdi-clock-outline text-3xl shrink-0" />
          <div>
            <h3 class="text-lg font-bold mb-2 uppercase">
              Часы работы
            </h3>
            <p>Любое время 24/7</p>
          </div>
        </div>

        <!-- Адрес -->
        <div class="flex gap-4 items-start">
          <div class="i-mdi-map-marker-outline text-3xl shrink-0" />
          <div>
            <h3 class="text-lg font-bold mb-2 uppercase">
              Наш адрес
            </h3>
            <p>г. Алматы, ул. Жандосова 98, офис 701</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
