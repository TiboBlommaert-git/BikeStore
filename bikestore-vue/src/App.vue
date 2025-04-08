<template>
  <div class="bg-primary-white">
    <!--  <AppFixedNav />

    <AppHeaderHero /> -->
    <AppHeroHome />

    <AppOnzeUniekeServices />
    <h2 class="text-center text-nav-text-green font-bold text-4xl font-inter mb-10">Nieuwe <span class="text-black">fietsen</span></h2>

    <AppSimpleBikeCard />

    <div class="flex justify-center">
      <a href="https://arthurdepuydt.be/atelier4/web/assortiment"> <button class="bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border border-white hover:border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green mt-10">Bekijk ons aanbod</button></a>
    </div>
    <div class="mb-10 lg:mb-20"></div>
    <AppTextAndPictureSection v-for="(entry, index) in entries" :key="index" :entry="entry" />

    <AppPictureAndTextSection />

    <AppOnsUniekVerhaal />

    <AppBlog />
    <div class="mb-10 lg:mb-20"></div>
    <!-- <AppFooter /> -->
  </div>
</template>
<script setup>
import AppTextAndPictureSection from './components/AppTextAndPictureSection.vue';
import AppPictureAndTextSection from './components/AppPictureAndTextSection.vue';
import AppOnzeUniekeServices from './components/AppOnzeUniekeServices.vue';
import AppOnsUniekVerhaal from './components/AppOnsUniekVerhaal.vue';
import { ref, onMounted } from 'vue';
import AppHeaderHero from './components/AppHeaderHero.vue';
import AppFixedNav from './components/AppFixedNav.vue';
import AppHeroHome from './components/AppHeroHome.vue';
import AppSimpleBikeCard from './components/AppSimpleBikeCard.vue';
import AppFooter from './components/AppFooter.vue';
import AppBlog from './components/AppBlog.vue';

const entries = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost/2023-2024-atelier4-bs-groep4/bikestore/web/blogEntries.json');
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
