<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="flex items-center space-x-5">
    <div class="p-4 bg-white shadow-lg">
      <div :class="`${icon} text-6xl bg-red-500`" />
    </div>
    <div>
      <h1 class="text-4xl font-800">
        {{ title }}
      </h1>
      <p class="text-grey-600 font-light">
        {{ description }}
      </p>
    </div>
  </div>
</template>
