<template>
  <div class="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12-2 gap-4 justify-items-center">
    <div @click="navigateToCustomUrl" class="md:col-span-6 lg:col-span-4 col-span-8 mx-auto sm:mb-4 mb-4 cursor-pointer">
      <img src="../assets/bike-orange.png" alt="logo" class="lg:w-250p md:w-250p sm:w-100p w-100p h-auto" />
      <h2 class="text-bike-color-dark-grey mt-3 font-semibold text-h2">{{ props.entry.productTitle }}</h2>
      <h4 class="text-bike-color-dark-grey mb-3 mt-min5px">{{ props.entry.merk }}</h4>
      <div class="flex mb-2">
        <span v-for="(color, index) in props.entry.productColours" :key="index" :style="{ backgroundColor: color.hexcode }" :alt="color.colour" class="block h-2 w-5 mr-2"> </span>
      </div>
      <h3 class="font-bold">{{ formattedPrice }}</h3>
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
const formattedPrice = computed(() => {
  const priceStr = String(props.entry.productprice);
  const mainPart = priceStr.slice(0, -2);
  const decimalPart = priceStr.slice(-2);
  return `${mainPart},${decimalPart}`;
});
const navigateToCustomUrl = () => {
  const url = `http://localhost:5173/detailpage`;
  sessionStorage.setItem('productTitle', props.entry.productTitle);
  window.location.href = url;
};
</script>
<style lang="scss"></style>
