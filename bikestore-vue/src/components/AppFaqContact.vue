<template>
  <div class="max-w-screen-xl md:mx-auto px-10 bg-primary-white">
    <div class="bg-primary-white py-20 lg:py-0">
      <h2 class="text-2xl mb-5 font-semibold">Antwoord niet gevonden?</h2>
      <p class="mb-10 font-semibold">Indien u uw antwoord hier niet gevonden hebt, kunt u dit formulier invullen en zullen wij u zo spoedig het antwoord op uw vraag bezorgen.</p>
      <form class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-85p sm:w-90p lg:w-4/5">
        <div>
          <input class="bg-transparent border-2 border-nav-text-green text-nav-text-green placeholder-nav-text-green rounded-1 pb-1 footer-form w-full h-10" placeholder="Emailadres" />
          <input class="bg-transparent border-2 border-nav-text-green text-nav-text-green placeholder-nav-text-green rounded-1 pb-1 footer-form w-full h-10 mt-4" placeholder="Name" />
        </div>
        <div>
          <input class="bg-transparent border-2 border-nav-text-green text-nav-text-green placeholder-nav-text-green rounded-1 pb-1 footer-form w-full h-10" placeholder="Telefoon" />
          <input class="bg-transparent border-2 border-nav-text-green text-nav-text-green placeholder-nav-text-green rounded-1 pb-1 footer-form w-full h-10 mt-4" placeholder="Onderwerp" />
        </div>
        <textarea class="bg-transparent border-2 border-nav-text-green text-nav-text-green placeholder-nav-text-green rounded-1 pb-1 footer-form w-full h-8 mt-2 sm:col-span-2" placeholder="Bericht"></textarea>

        <div class="flex items-center mt-4 sm:col-span-2">
          <input type="checkbox" id="agree1" name="agree1" class="bg-transparent border-2 border-white rounded-1 pb-1 footer-form w-6 h-6 mr-2" />
          <label for="agree1">Ik ontvang graag de nieuwsbrief</label>
        </div>
        <div class="flex items-center mt-4 sm:col-span-2">
          <input type="checkbox" id="agree2" name="agree2" class="bg-transparent border-2 border-nav-text-green rounded-1 pb-1 footer-form w-6 h-6 mr-2" />
          <label for="agree2">Ik ga akkoord met het privacy statement</label>
        </div>
        <div class="text-left xl:text-right lg:col-span-2 lg:mt-2 mt-4 flex justify-start">
          <button class="bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border-2 border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green">Verzenden</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="css">
input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background: transparent;
  border: 2px solid #557260;
  border-radius: 1px;
  position: relative;
}

input[type='checkbox']:checked::before {
  content: '';
  position: absolute;
  width: 5px;
  height: 10px;
  border: solid #557260;
  border-width: 0 2px 2px 0;
  top: 2px;
  left: 7px;
  transform: rotate(45deg);
}
</style>
