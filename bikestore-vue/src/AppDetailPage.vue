<template>
  <div class="bg-primary-white">
    <!-- <AppFixedNav />
    <AppHeaderHero /> -->
    <AppHeroDetail />
    <!-- <AppFooter /> -->
  </div>
</template>
<script setup>
import AppHeaderHero from './components/AppHeaderHero.vue';
import AppFixedNav from './components/AppFixedNav.vue';
import AppHeroDetail from './components/AppHeroDetail.vue';
import AppFooter from './components/AppFooter.vue';

import { ref, onMounted } from 'vue';
const entries = ref([]);

onMounted(async () => {
  try {
    const urlProductTitle = sessionStorage.getItem('productTitle');
    const productTitle = encodeURIComponent(urlProductTitle);
    console.log(urlProductTitle);

    const response = await fetch(`http://localhost/2023-2024-atelier4-bs-groep4/bikestore/web/bikeEntries/${productTitle}.json`);
    if (response.ok) {
      const data = await response.json();
      entries.value = data.data;
      console.log(entries);
    } else {
      console.log('Response not OK');
    }
  } catch (error) {
    console.error(error);
  }
});
</script>
<style lang="scss"></style>
