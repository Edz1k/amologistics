<script setup lang="ts">
import Toast from 'primevue/toast'
</script>

<template>
  <main font-sans>
    <Toast />
    <NavbarComponent />
    <RouterView />
    <FooterComponent id="contacts" class="scroll-mt-24" />
  </main>
</template>
