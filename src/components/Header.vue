<script setup lang="ts">
  import Hamburger from './Hamburger.vue'
  import Logo from './Logo.vue'
</script>

<template>
  <header class="flex items-center justify-between py-6">
    <div class="logo hidden md:block">
      <a
        class="flex items-center hover:opacity-70 transition duration-300 ease-in-out"
        href="/"
      >
        <Logo class="h-6 fill-current text-black dark:text-white"></Logo>
      </a>
    </div>
    <div class="logo-mobile block md:hidden">
      <a
        class="flex items-center hover:opacity-70 transition duration-300 ease-in-out"
        href="/"
      >
        <Logo class="h-6 fill-current text-black dark:text-white"></Logo>

        <h2 class="text-2xl font-sans font-semibold" />
      </a>
    </div>
    <Hamburger />
  </header>
</template>
