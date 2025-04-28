<script setup>
import { ref } from 'vue'

const directions = ref([
  // СНГ
  {
    label: 'Россия',
    flag: 'https://online.zakon.kz/m/document/?doc_id=40247111',
    // точка, где будет центр метки:
    x: 45.0, // примерное значение, % от ширины
    y: 20, // примерное значение, % от высоты
  },
  // Казахстан
  {
    label: 'Казахстан',
    flag: 'https://akorda.kz/assets/media/flag_mediumThumb.jpg',
    x: 40.0,
    y: 28.0,
  },
  {
    label: 'Eвропа',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png',
    x: 70.0,
    y: 28.0,
  },
  {
    label: 'Турция',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2560px-Flag_of_Turkey.svg.png',
    x: 60.0,
    y: 28.0,
  },
  {
    label: 'Китай',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png',
    x: 50.0,
    y: 28.0,
  },
  // остальные страны...
])
</script>

<template>
  <div class="w-full relative">
    <img src="/11383065.png" alt="" loading="lazy" class="w-full">
    <div
      v-for="(d, i) in directions"
      :key="i"
      class="-translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded bg-white flex shadow transform items-center absolute space-x-2"
      :style="{ left: `${d.x}%`, top: `${d.y}%` }"
    >
      <img :src="d.flag" alt="" class="rounded-sm h-4 w-6 object-cover">
      <span class="text-sm font-medium">{{ d.label }}</span>
    </div>
  </div>
</template>
