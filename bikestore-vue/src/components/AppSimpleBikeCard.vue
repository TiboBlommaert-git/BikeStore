<template>
  <div class="max-w-screen-xl mx-auto lg:px-0 px-10 mt-10">
    <div class="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12-2 gap-4 justify-items-center">
      <div class="md:col-span-6 lg:col-span-4 col-span-8 mx-auto sm:mb-4 mb-4 cursor-pointer" @click="navigateToAssortiment">
        <img src="../assets/bike-orange.png" alt="logo" class="lg:w-250p md:w-250p sm:w-100p w-100p h-auto" />
        <h2 class="text-bike-color-dark-grey mt-3 font-semibold text-h2">Cortina-e</h2>
        <h4 class="text-bike-color-dark-grey mb-3 mt-min5px">Cortina</h4>
        <div class="flex mb-2">
          <span class="block h-2 w-5 bg-bike-color-grey mr-2"></span>
          <span class="block h-2 w-5 bg-bike-color-orange mr-2"></span>
          <span class="block h-2 w-5 bg-bike-color-blue mr-2"></span>
          <span class="block h-2 w-5 bg-bike-color-dark-grey mr-2"></span>
        </div>
        <h3 class="font-bold">€1699</h3>
      </div>

      <div class="md:col-span-6 lg:col-span-4 col-span-8 mx-auto sm:mb-4 mb-4 cursor-pointer" @click="navigateToAssortiment">
        <img src="../assets/bike-light.png" alt="logo" class="lg:w-250p md:w-250p sm:w-100p w-100p h-auto" />
        <h2 class="text-bike-color-dark-grey mt-3 font-semibold text-h2">Triple-x</h2>
        <h3 class="text-bike-color-dark-grey mb-3 mt-min5px">Triple</h3>

        <div class="flex mb-2">
          <span class="block h-2 w-5 bg-black mr-2"></span>
          <span class="block h-2 w-5 bg-bike-color-dark-grey mr-2"></span>
        </div>
        <h3 class="font-bold">€1899</h3>
      </div>

      <div class="md:col-span-6 lg:col-span-4 col-span-8 mx-auto sm:mb-4 mb-4 cursor-pointer" @click="navigateToAssortiment">
        <img src="../assets/bike-dark.png" alt="logo" class="lg:w-250p md:w-250p sm:w-100p w-100p h-auto" />
        <h2 class="text-bike-color-dark-grey mt-3 font-semibold text-h2">Cube Kathamandu</h2>
        <h3 class="text-bike-color-dark-grey mb-3 mt-min5px">Cube</h3>

        <div class="flex mb-2">
          <span class="block h-2 w-5 bg-bike-color-dark-grey mr-2"></span>
          <span class="block h-2 w-5 bg-bike-color-light-grey mr-2"></span>
        </div>
        <h3 class="font-bold">€1699</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateToAssortiment() {
      window.location.href = 'https://arthurdepuydt.be/atelier4/web/assortiment';
    },
  },
};
</script>
<style lang="scss"></style>
