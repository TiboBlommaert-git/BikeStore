<template>
  <div class="max-w-screen-xl mx-auto mt-20 mb-20 lg:mb-40 md:mx-auto px-10">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-8 lg:order-2 lg:col-start-5 md:mb-5 md:mx-auto">
        <img src="../assets/previewimage.png" class="w-highlightImg h-auto flip-image align-top" />
      </div>
      <div class="col-span-12 lg:col-span-4 lg:order-1 md:mx-auto flex flex-col justify-start mt-20">
        <h2 class="font-bold text-4xl text-nav-text-green mb-1">Moustache</h2>
        <h3 class="text-2xl mb-2">Musti</h3>
        <p class="mb-3">De Moustache elektrische fiets combineert stijl, comfort en kracht voor een duurzame en plezierige rijervaring.</p>
        <p class="mb-6 text-4xl text-nav-text-green">€2399</p>
        <button class="max-w-max bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-inter border border-white hover:border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green">Lees meer</button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.flip-image {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
