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
    <div id="menu-trigger" class="">
      <svg
        aria-hidden="true"
        class="text-black"
        data-icon="bars"
        data-prefix="fas"
        focusable="false"
        height="24"
        role="img"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          fill="currentColor"
        />
      </svg>
    </div>
  </header>
</template>
