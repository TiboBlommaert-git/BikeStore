<template>
  <div class="bg-primary-white">
    <!--   <AppFixedNav />
    <AppHeader /> -->

    <AppFilters />
    <div class="max-w-screen-xl mx-auto lg:px-0 px-10 mt-10">
      <AppBikeCard v-for="(entry, index) in entries" :key="index" :entry="entry" />
    </div>

    <AppHighlighted />
    <AppContent />
    <AppSimpleBikeCard />
    <AppUitproberen />
    <AppHighlightedTurned />
    <!-- <AppFooter /> -->
  </div>
</template>
<script setup>
import AppBikeCard from './components/AppAssortimentBikeCard.vue';
import AppFixedNav from './components/AppFixedNav.vue';
import AppHeader from './components/AppHeader.vue';
import AppFilters from './components/AppFiltersOverzicht.vue';
import AppHighlighted from './components/AppHighlightedOverzicht.vue';
import AppContent from './components/AppContentOverzicht.vue';
import AppUitproberen from './components/AppUitproberenOverzicht.vue';
import AppHighlightedTurned from './components/AppHighlightedOverzichtTurned.vue';
import AppFooter from './components/AppFooter.vue';
import AppSimpleBikeCard from './components/AppSimpleBikeCard.vue';
import { ref, onMounted } from 'vue';
const entries = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost/2023-2024-atelier4-bs-groep4/bikestore/web/bikeEntries.json');
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
