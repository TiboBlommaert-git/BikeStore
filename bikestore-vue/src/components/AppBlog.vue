<template>
  <h2 class="text-center text-nav-text-green font-bold text-4xl font-inter mb-14">Blog</h2>

  <div class="max-w-screen-xl mx-auto mb-20">
    <div class="grid grid-cols-1 sm:grid-cols-5 sm:grid-rows-5 gap-2 h-screen">
      <div class="w-full h-full sm:col-span-3 sm:row-span-3 bg-blue-500 relative group overflow-hidden cursor-pointer" @click="navigateToBlog">
        <img src="../assets/blogitem1.svg" class="w-full h-full object-cover" alt="blogitem1" />
        <div class="absolute bottom-0 left-0 w-full bg-nav-text-green p-3 transition duration-400 delay-50">
          <p class="text-white font-sofia font-medium text-lg">Ontdek de Hottest Bike Trends van het Seizoen!</p>
          <p class="text-white hidden lg:group-hover:block font-inter font-extralight text-sm pb-4">Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen. Of je nu avontuurlijk bent of gewoon op zoek naar stijlvolle opties voor je dagelijkse ritten, wij hebben alles wat je nodig hebt om in stijl te fietsen.</p>
        </div>
      </div>
      <div class="w-full h-full sm:col-span-2 sm:row-span-2 bg-yellow-500 relative group overflow-hidden cursor-pointer">
        <img src="../assets/blogitem3.svg" class="w-full h-full object-cover" alt="blogitem3" />
        <div class="absolute bottom-0 left-0 w-full bg-nav-text-green p-3 transition duration-400 delay-50">
          <p class="text-white font-sofia font-medium text-lg">Ontdek de Hottest Bike Trends van het Seizoen!</p>
          <p class="text-white hidden lg:group-hover:block font-inter font-extralight text-sm pb-4">Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen.</p>
        </div>
      </div>
      <div class="w-full h-full sm:col-span-2 sm:row-span-3 bg-red-500 relative group overflow-hidden cursor-pointer" @click="navigateToBlog">
        <img src="../assets/blogitem4.svg" class="w-full h-full object-cover" alt="blogitem4" />
        <div class="absolute bottom-0 left-0 w-full bg-nav-text-green p-3 transition duration-400 delay-50">
          <p class="text-white font-sofia font-medium text-lg">Ontdek de Beste Off-Road Routes!</p>
          <p class="text-white hidden lg:group-hover:block font-inter font-extralight text-sm pb-4">Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen.</p>
        </div>
      </div>
      <div class="w-full h-full sm:col-span-3 sm:row-span-2 bg-green-500 relative group overflow-hidden cursor-pointer" @click="navigateToBlog">
        <img src="../assets/blogitem2.svg" class="w-full h-full object-cover" alt="blogitem2" />
        <div class="absolute bottom-0 left-0 w-full bg-nav-text-green p-3 transition duration-400 delay-50">
          <p class="text-white font-sofia font-medium text-lg">Ontdek de Beste Off-Road Routes!</p>
          <p class="text-white hidden lg:group-hover:block font-inter font-extralight text-sm pb-4">Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToBlog() {
      window.location.href = 'https://arthurdepuydt.be/atelier4/web/blog';
    },
  },
};
</script>
<style lang="scss"></style>
