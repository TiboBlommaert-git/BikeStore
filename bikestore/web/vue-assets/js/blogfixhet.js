let posts = [
  {
    title: 'De voordelen van elektrisch fietsen',
    content: 'Ontdek waarom steeds meer mensen overstappen op elektrisch fietsen en de voordelen ervaren van deze moderne vorm van mobiliteit.',
    datum: '24/10/2023',
    category: 'Technologie',
  },
  {
    title: '5 Prachtige e-bike routes door de natuur',
    content: 'Verken de natuur op de fiets met deze 5 adembenemende fietsroutes die speciaal zijn ontworpen voor e-bikes.',
    datum: '24/10/2023',
    category: 'Routes',
  },
  {
    title: 'Duurzaamheid en e-bikes: Een perfecte combinatie',
    content: 'Lees hoe e-bikes bijdragen aan een duurzamere toekomst door het verminderen van CO2-uitstoot en het bevorderen van milieuvriendelijk transport.',
    datum: '24/10/2023',
    category: 'Natuur',
  },
  {
    title: 'Top 10 Fietsvriendelijke natuurgebieden om te verkennen',
    content: 'Ontdek de mooiste natuurgebieden die perfect zijn om te verkennen met de fiets, inclusief handige tips voor e-bike liefhebbers.',
    datum: '24/10/2023',
    category: 'Natuur',
  },
];
let layoutactief = 'hori';

const toggleLayout = function (layout) {
  console.log(layout);
  layoutactief = layout;
  const text = document.querySelectorAll('js-txt');
  const imgs = document.querySelectorAll('.js-blogimg');
  const view = document.querySelector('.js-view');
  if (layout === 'hori') {
    document.querySelector('.js-vert').src = 'vue-assets/assets/vertblue.svg';
    document.querySelector('.js-hori').src = 'vue-assets/assets/horigroen.svg';
    document.querySelectorAll('.js-koepel').forEach(function (element) {
      element.classList.remove('grid', 'grid-cols-2', 'gap-4');
    });

    document.querySelectorAll('.js-blogimg').forEach(function (element) {
      element.classList.remove('col-span-1');
    });

    document.querySelectorAll('.js-txt').forEach(function (element) {
      element.classList.remove('col-span-1');
    });
    view.classList.add('md:grid-cols-2');
    view.classList.remove('md:grid-cols-1');
    console.log('&éééé');
  } else if (layout === 'vert') {
    document.querySelector('.js-vert').src = 'vue-assets/assets/vrstatus.svg';
    document.querySelector('.js-hori').src = 'vue-assets/assets/hrstatus.svg';
    document.querySelectorAll('.js-koepel').forEach(function (element) {
      element.classList.add('grid', 'grid-cols-2', 'gap-4');
    });

    document.querySelectorAll('.js-blogimg').forEach(function (element) {
      element.classList.add('col-span-1');
    });

    document.querySelectorAll('.js-txt').forEach(function (element) {
      element.classList.add('col-span-1');
    });
    view.classList.remove('md:grid-cols-2');
    view.classList.add('md:grid-cols-1');
  }
};

const catIngeladen = function (cat, layout) {
  let html = '';
  if (layout === 'vert') {
    console.log(cat);
    if (cat === 'Technologie') {
      console.log('tek');
      for (const blog of posts) {
        html += `<div class="mt-4">
                <img src="vue-assets/assets/moederzoon.svg" alt="moeder" class="w-full"> <!-- Voeg de klasse "w-full" toe -->
                <p class="font-inter font-semibold text-2xl text-nav-text-green mt-4">${blog.title}</p>
                <p class="font-inter font-medium text-md mt-1">${blog.datum}</p>
                <p class="font-inter mt-2 text-md">${blog.content}.</p>
            </div>`;
      }
    }
    document.querySelector('.js-view').innerhtml = html;
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Zoek het <select>-element op basis van het ID-attribuut
  const selectElement = document.getElementById('categorieSelect');

  // Voeg een 'change'-eventlistener toe aan het <select>-element
  selectElement.addEventListener('change', function () {
    // Haal de geselecteerde waarde op
    const selectedOption = this.value;
    catIngeladen(selectedOption);
    // Doe hier iets met de geselecteerde waarde, bijvoorbeeld loggen naar de console
    console.log('Geselecteerde categorie:', selectedOption);
  });
});
