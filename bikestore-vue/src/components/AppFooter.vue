<template>
  <div class="bg-nav-text-green mt-36 text-primary-white relative">
    <div class="max-w-screen-xl mx-auto lg:absolute lg:top-min2rem lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-fixed-nav-green p-4 rounded-1px shadow-lg w-full flex justify-center">
      <div class="flex flex-col gap-6 py-8 w-full lg:w-85p lg:flex-row lg:justify-between lg:items-center">
        <div class="flex justify-center lg:items-center gap-2">
          <div><img src="../assets/icon-marker.png" alt="iconmarker" class="w-5 mr-2" /></div>
          <p class="text-2xl md:text-xl xl:text-2xl">Fietsstraat 15 8500 Kortrijk</p>
        </div>
        <hr class="border-white my-4 lg:hidden" />
        <div v-if="windowWidth >= 1024">
          <div class="border-l-2 border-white h-10"></div>
        </div>

        <div class="flex justify-center md:items-center gap-2">
          <div><img src="../assets/icon-phone.png" alt="iconphone" class="w-5 mr-2" /></div>
          <p class="text-2xl md:text-xl xl:text-2xl">Tel. +32 56 56 56 16</p>
        </div>
        <hr class="border-white my-4 lg:hidden" />
        <div v-if="windowWidth >= 1024">
          <div class="border-l-2 border-white h-10"></div>
        </div>

        <div class="flex justify-center md:items-center gap-2">
          <div><img src="../assets/icon-email.png" alt="iconemail" class="w-5 mr-2" /></div>
          <p class="text-2xl md:text-xl xl:text-2xl">hallo@bikestore.be</p>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 sm:gap-20 md:gap-30 mx-auto pt-10 lg:pt-36 pb-2">
      <!-- aanbod -->

      <div class="flex flex-col text-start justify-start mx-4">
        <h3 class="mb-2 font-semibold text-lg">Aanbod</h3>
        <div class="font-light cursor-pointer">
          <p>Elektrische Mountainbike</p>
          <p>Elektrische stadsfiets</p>
          <p>Elektrische racefiets</p>
          <p>Onderdelen</p>
          <p>Accessoires</p>
        </div>
      </div>
      <!-- services -->
      <div class="flex flex-col items-start mx-4">
        <h3 class="mb-2 font-semibold text-lg">Services</h3>
        <div class="font-light cursor-pointer">
          <p>Gratis brochure</p>
          <p>Gratis testrit</p>
          <p>Advies op maat</p>
          <p>Onderhoud en reparaties</p>
          <p>Fietsverzekering</p>
        </div>
      </div>
      <!-- klantendienst -->
      <div class="flex flex-col items-start justify-start mx-4">
        <h3 class="mb-2 font-semibold text-lg">Klantendienst</h3>
        <div class="font-light cursor-pointer">
          <p>Algemene voorwaarden</p>
          <p>Garantievoorwaarden fietsen</p>
          <p>Veelgestelde vragen</p>
          <p>Contact</p>
        </div>
      </div>
      <!-- volg ons -->
      <div class="flex flex-col items-start mx-4">
        <h3 class="mb-2 font-semibold text-lg">Volg ons</h3>
        <div class="flex gap-3 flex-wrap">
          <img src="../assets/icon-facebook.png" alt="iconfacebook" class="w-9 cursor-pointer" />
          <img src="../assets/icon-instagram.png" alt="iconfacebook" class="w-9 cursor-pointer" />
          <img src="../assets/icon-in.png" alt="iconfacebook" class="w-9 cursor-pointer" />
          <img src="../assets/icon-twitter.png" alt="iconfacebook" class="w-9 cursor-pointer" />
        </div>
      </div>
      <!-- openingsuren -->
      <div class="flex flex-col items-start mx-4">
        <h3 class="mb-2 font-semibold text-lg">Openingsuren</h3>
        <div class="font-light flex flex-col flex-nowrap">
          <p><strong>maandag</strong> : gesloten</p>
          <p><strong>di - vr</strong> : 8.30 - 18.00</p>
          <p><strong>zondag</strong> : gesloten</p>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 max-w-screen-xl pb-10 gap-4 lg:mx-auto">
      <div class="lg:col-span-2"></div>
      <div class="flex flex-col col-span-1 mx-4">
        <h3 class="mb-2 font-semibold text-lg">Wilt u onze nieuwtjes ontvangen?</h3>
        <p class="font-light mb-4">Schrijf u dan vanaf nu in voor onze nieuwsbrief!</p>
        <div class="flex">
          <input class="bg-transparent border-2 text-primary-white border-white rounded-1 pb-1 footer-form w-2/3 h-10" placeholder="Emailadres" />
          <button class="bg-fixed-nav-green border-white rounded-1 pb-1 footer-form w-1/3 h-10">Schrijf je in</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const windowWidth = ref(window.innerWidth);

onMounted(() => {
  const onResize = () => {
    windowWidth.value = window.innerWidth;
  };
  window.addEventListener('resize', onResize);
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize);
  });
});
</script>
<style lang="scss"></style>
