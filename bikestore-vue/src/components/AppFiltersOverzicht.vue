<template>
    <div class="max-w-screen-xl lg:text-center mt-10 mb-20 md:mx-auto px-10">
      <p>{{ props.entry.merk }}</p>
        <div class="relative inline-block w-38 mr-8 md:mt-6 mt-6">
            <select
                class="block appearance-none w-full bg-primary-white border-nav-text-green border-2 text-nav-text-green py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option selected disabled>Type fiets</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#557260" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </div>
        <div class="relative inline-block w-38 mr-8 md:mt-6 mt-6">
            <select
                class="block appearance-none w-full bg-primary-white border-nav-text-green border-2 text-nav-text-green py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option selected disabled>Maat</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#557260" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </div>
        <div class="relative inline-block w-38 mr-8 md:mt-6 mt-6">
            <select
                class="block appearance-none w-full bg-primary-white border-nav-text-green border-2 text-nav-text-green py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option selected disabled>Frametype</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#557260" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </div>
        <div class="relative inline-block w-38 mr-8 md:mt-6 mt-6">
            <select
                class="block appearance-none w-full bg-primary-white border-nav-text-green border-2 text-nav-text-green py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option selected disabled>Merk</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#557260" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </div>
        <div class="relative inline-block md:mt-6 mt-6">
            <div class="flex ">
                <input type="number" min="0" max="1000" step="10"
                    class="bg-primary-white border-nav-text-green border-2 text-nav-text-green py-1.5 px-4 w-input text-right mr-4" id="priceInput" value="0">
                <input type="range" min="0" max="1000" step="10" class="w-72 md:w-72 mr-4 ml-4 range-track-custom range-thumb-custom bg-primary-white" id="priceRange">
            <input type="number" min="0" max="1000" step="10"
                    class="bg-primary-white border-nav-text-green border-2 text-nav-text-green py-1.5 px-4 w-input text-right ml-4" id="priceInputMax" value="1000">
            </div>
        </div>
    </div>
</template>
<script setup>

import { defineProps, computed } from 'vue';

const props = defineProps({
  entry: {
    type: Object,
    required: true,
  },
});


</script>
<style>
input[type=range] {
  height: 20px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 200px;
  @media screen and (max-width: 768px) {
    width: 100px;
}
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #557260;
  border-radius: 0px;
  border: 0px solid #557260;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #557260;
  border: 0px solid #557260;
  height: 30px;
  width: 7px;
  border-radius: 0px;
  background: #557260;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -12.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #557260;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #557260;
  border-radius: 0px;
  border: 0px solid #557260;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #557260;
  border: 0px solid #557260;
  height: 20px;
  width: 7px;
  border-radius: 0px;
  background: #557260;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #557260;
  border: 0px solid #557260;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #557260;
  border: 0px solid #557260;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #557260;
  border: 0px solid #557260;
  height: 30px;
  width: 7px;
  border-radius: 0px;
  background: #557260;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #557260;
}
input[type=range]:focus::-ms-fill-upper {
  background: #557260;
}

</style>