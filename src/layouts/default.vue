<script setup lang="ts">
  import Header from '@components/Header.vue'
  import Footer from '@components/Footer.vue'
  import Container from '@components/Container.vue'
</script>

<template>
  <Container>
    <Header />
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
          >{{ locale }}</option
        >
      </select>
    </div>
  </Container>

  <router-view />

  <Footer />
</template>
