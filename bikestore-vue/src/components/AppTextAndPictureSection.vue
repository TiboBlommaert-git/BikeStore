<template>
  <div class="flex sm:flex-row flex-col min-h-screen">
    <div class="xl:w-1/2 w-full flex flex-col justify-center text-left sm:px-20 px-10 my- my-10 sm:my-0">
      <div class="font-medium text-3xl font-sofia mb-4">
        <p class="text-nav-text-green">
          <!-- Elektrische fiets</p>
        <p>met advies op maat</p> -->{{ props.entry.title }}
        </p>
      </div>

      <div class="font-inter">
        <p class="mb-2"><!-- Elektrische fietsen zie je overal rondrijden. Het internet staat vol met artikels en meningen over deze fietsen. Bij Bikestore willen we jou vooral laten ervaren hoe onze fietsen zijn. -->{{ props.entry.SectionOne }}</p>
        <p class="text-nav-text-green font-medium mb-2"><!-- “Persoonlijke aanpak en uitmuntende service zijn voor ons heel belangrijk.” -->{{ props.entry.tussenTitel }}</p>
        <p class="mb-4"><!-- Voor onze fietsen gebruiken wij enkel de beste onderdelen die er op de fietsenmarkt te vinden zijn. Dat garanderen we. Samen met jou kiezen we nadien nog enkele accessoires uit en jij hebt de fiets die volledig bij jou past. -->{{ props.entry.SectionTwo }}</p>
        <button class="bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border border-white hover:border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green" @click="navigateToAssortiment">Bezoek ons aanbod</button>
      </div>
    </div>
    <div class="xl:w-1/2 w-full sm:block">
      <img class="w-full h-full object-cover" src="../assets/section-pic1.png" alt="Bikepicture" />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  entry: {
    type: Object,
    required: true,
  },
});
const navigateToAssortiment = () => {
  window.location.href = 'https://arthurdepuydt.be/atelier4/web/assortiment';
};
</script>
<style lang="scss"></style>
