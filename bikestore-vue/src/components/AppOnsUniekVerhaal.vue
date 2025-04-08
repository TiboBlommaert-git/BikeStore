<template>
  <div class="flex sm:flex-row-reverse flex-col-reverse min-h-screen mb-10 lg:mb-20">
    <div class="xl:w-1/2 w-full sm:block">
      <img class="w-full h-full object-cover" src="../assets/pexels-team-evelo-15020551.png" alt="Bikepicture" />
    </div>
    <div class="xl:w-1/2 w-full flex flex-col justify-center text-left text-primary-white sm:px-16 md:px-20 px-10 py-10 sm:py-0 bg-nav-text-green">
      <div class="font-medium text-3xl font-sofia mb-8">
        <p>Ons unieke verhaal</p>
      </div>
      <div class="font-inter">
        <p class="mb-8">Een elektrische fiets van Bikestore, dat is vooral heel veel service Ook na je aankoop kan je rekenen op de service die je geniet zoals bij een lokale fietsenwinkel. En zelfs meer. Met onze mobiele servicewagens bieden we all-inservice aan huis voor levering, onderhoud, herstelling en pechverhelping. Jij hoeft dus alleen maar zorgeloos te genieten en te trappen. Want ja, ook met een elektrische fiets moet je blijven trappen.</p>
        <button class="bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border border-white transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green" @click="navigateToOnsVerhaal">Over bikestore</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToOnsVerhaal() {
      window.location.href = 'https://arthurdepuydt.be/atelier4/web/verhaal';
    },
  },
};
</script>
<style lang="scss"></style>
