<template>
  <div class="lg:h-824 sm:h-476 flex lg:relative bg-nav-text-green lg:bg-white z-0">
    <div class="hidden lg:block lg:w-2/5 bg-primary-white">
      <img class="bike-image absolute left-min20rem xl:left-min15rem top-1/2 transform -translate-y-1/2 w-70p" src="../assets/herofiets.png" alt="Bikepicture" />
    </div>
    <div class="w-full lg:w-3/5 bg-nav-text-green flex justify-center">
      <div class="flex justify-end items-center md:h-full">
        <div class="xl:w-4/5 w-full flex flex-col text-left text-primary-white sm:px-16 md:px-20 px-6 my-10 sm:my-0 bg-nav-text-green">
          <div class="font-black text-5xl md:text-7xl font-inter mb-8">
            <p>Welkom bij</p>
            <p>Bike<span class="text-title-accent">Store</span></p>
          </div>
          <div class="font-inter">
            <p class="mb-8">Ontdek jouw droomfiets met een gratis testrit bij ons! Of je nu door de stad wilt cruisen of de paden wilt verkennen, wij hebben de perfecte fiets voor jou. Ervaar het plezier van het rijden op een fiets die bij jou past. Boek nu jouw testrit en begin aan jouw fietsavontuur!</p>
            <button class="bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-inter border border-white transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green" @click="navigateToAssortiment">Bekijk ons assortiment</button>
          </div>
        </div>
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
