<script setup>
defineProps({
  icon: String,
  title: String,
  text: String,
  number: Number,
})
</script>

<template>
  <div class="rounded-lg bg-white flex w-82 shadow-md overflow-hidden">
    <div class="text-white px-4 py-6 bg-red-600 flex flex-col w-30 items-center justify-center">
      <i :class="icon" class="text-2xl mb-2" />
      <span class="text-sm font-bold">0{{ number }}</span>
    </div>
    <div class="p-4 flex flex-col justify-between">
      <h3 class="text-lg font-semibold mb-2">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-600">
        {{ text }}
      </p>
    </div>
  </div>
</template>
