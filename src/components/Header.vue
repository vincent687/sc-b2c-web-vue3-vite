<script setup lang="ts">
  import Hamburger from './Hamburger.vue'
</script>

<template>
  <header class="flex items-center justify-between py-6">
    <div class="logo hidden md:block">
      <a
        class="flex items-center hover:opacity-70 transition duration-300 ease-in-out"
        href="/"
      >
        <img
          class="mr-2 w-40"
          alt="Social Career"
          src="../assets/sc-logo-2021.svg"
        />

        <!-- <h2 class="text-2xl font-sans font-semibold"><strong>Social Career</strong></h2> -->
      </a>
    </div>
    <div class="logo-mobile block md:hidden">
      <a
        class="flex items-center hover:opacity-70 transition duration-300 ease-in-out"
        href="/"
      >
        <img
          class="w-40"
          alt="Social Career"
          src="../assets/sc-logo-2021.svg"
        />

        <h2 class="text-2xl font-sans font-semibold" />
      </a>
    </div>
    <Hamburger></Hamburger>
  </header>
</template>
