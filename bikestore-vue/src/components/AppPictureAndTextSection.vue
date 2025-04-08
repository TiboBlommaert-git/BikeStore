<template>
  <div class="flex sm:flex-row-reverse flex-col min-h-screen">
    <div class="xl:w-1/2 w-full flex flex-col justify-center text-left sm:px-16 md:px-20 px-10 my- my-10 sm:my-0">
      <div class="font-medium text-3xl font-sofia mb-4">
        <p>Vraag onze gratis</p>
        <p><span class="text-nav-text-green">brochure</span> aan</p>
      </div>
      <div class="font-inter">
        <p class="mb-4">Vraag hier onze gratis brochure aan en lees meer over onze unieke dienst, servicepakketten en prijzen. Wil je ook genieten van 1 jaar gratis onderhoud en pechverhelping? Ontdek het snel…</p>
        <button class="bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border border-white hover:border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green" @click="navigateToBrochure">Vraag de brochure aan</button>
      </div>
    </div>
    <div class="xl:w-1/2 w-full sm:block">
      <img class="w-full h-full object-cover" src="../assets/section-pic2.png" alt="Bikepicture" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToBrochure() {
      window.location.href = 'https://arthurdepuydt.be/atelier4/web/brochure';
    },
  },
};
</script>
<style lang="scss"></style>
