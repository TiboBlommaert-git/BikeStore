const toggleLayout = function (layout) {
  console.log('klik');
  const vert = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <div class="mt-4">
      <img src="vue-assets/assets/moederzoon.svg" alt="moeder" class="w-full"> <!-- Voeg de klasse "w-full" toe -->
      <p class="font-inter font-semibold text-2xl text-nav-text-green mt-4">Ontdek de Hottest Bike Trends van het Seizoen!</p>
      <p class="font-inter font-medium text-md mt-1">15 februari 2024</p>
      <p class="font-inter mt-2 text-md">Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen. Of je nu avontuurlijk bent of gewoon op zoek naar stijlvolle opties voor je dagelijkse ritten, wij hebben alles wat je nodig hebt om in stijl te fietsen.</p>
  </div>
  <div class="mt-4">
      <img src="vue-assets/assets/moederzoon.svg" alt="moeder" class="w-full">
      <p class="font-inter font-semibold text-2xl text-nav-text-green mt-4">Ontdek de Hottest Bike Trends van het Seizoen!</p>
      <p class="font-inter font-medium text-md mt-1">15 februari 2024</p>
      <p class="font-inter mt-2 text-md">Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen. Of je nu avontuurlijk bent of gewoon op zoek naar stijlvolle opties voor je dagelijkse ritten, wij hebben alles wat je nodig hebt om in stijl te fietsen.</p>
  </div>
</div>
  `;

  const hori = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
  <div class="mt-4 w-full">
      <img src="vue-assets/assets/moederzoon.svg" alt="moeder" class="w-full">
  </div>
  <div>
       <p class="font-inter font-semibold text-2xl text-nav-text-green mt-4">Ontdek de Hottest Bike Trends van het Seizoen!</p>
        <p class="font-inter font-medium text-md mt-1">15 februari 2024</p>
        <p class="font-inter mt-2 text-md">Ontdek de heetste fiets trends van het seizoen! Van elektrische fietsen tot gravelbikes, wij brengen je de nieuwste innovaties en stijlen. Of je nu avontuurlijk bent of gewoon op zoek naar stijlvolle opties voor je dagelijkse ritten, wij hebben alles wat je nodig hebt om in stijl te fietsen.</p>
  </div>
</div>`;

  if (layout === 'hori') {
    document.querySelector('.js-vert').src = 'vue-assets/assets/vertblue.svg';
    document.querySelector('.js-hori').src = 'vue-assets/assets/horigroen.svg';
    document.querySelector('.js-view').innerHTML = vert;
  }
  if (layout === 'vert') {
    document.querySelector('.js-vert').src = 'vue-assets/assets/vrstatus.svg';
    document.querySelector('.js-hori').src = 'vue-assets/assets/hrstatus.svg';
    document.querySelector('.js-view').innerHTML = hori;
  }
};
