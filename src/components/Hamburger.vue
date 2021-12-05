<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const router = useRouter()
  const path = computed(() => router.currentRoute.value.fullPath)
  const i18n = useI18n()

  const changeLocal = (locale: string) => {
    i18n.locale.value = locale
    let replacedPath = path.value.replace('en-US', locale).replace('zh', locale)
    router.push(replacedPath)
  }

  const showMenu = ref(false)
  const toggleNavbar = () => {
    showMenu.value = !showMenu.value
  }
</script>

<template>
  <div id="menu-trigger" class="relative" @click="toggleNavbar()">
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
    <div
      id="dropdown"
      :class="{ hidden: !showMenu, flex: showMenu }"
      class="absolute right-0 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
    >
      <ul class="py-1 w-full">
        <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`">
          <div
            class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            @click="changeLocal(locale)"
          >
            {{ locale }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
