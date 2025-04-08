<template>
  <nav class="bg-primary-white border-gray-200 dark:bg-gray-800 font-inter">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span class="flex items-center space-x-3 rtl:space-x-reverse"><img src="../assets/bikestore-logo.png" alt="logo" class="w-24" /></span>

      <button @click="toggleNavbar()" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <div :class="{ 'hidden lg:block': !isNavbarOpen, 'block w-full lg:w-auto': isNavbarOpen }" id="navbar-default">
        <ul class="font-regular text-xs flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-nav-text-green lg:flex-row lg:space-x-5 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-primary-white dark:bg-gray-800 lg:dark:bg-gray-800 dark:border-gray-700">
          <li>
            <a href="index.html" class="block py-2 px-1 lg:text-nav-text-green text-primary-white hover:text-nav-text-green rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-green lg:p-0 dark:text-white lg:dark:hover:text-secondary-green dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">HOME</a>
          </li>
          <li>
            <a href="assortiment.html" class="block py-2 px-1 lg:text-nav-text-green text-primary-white hover:text-nav-text-green rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-green lg:p-0 dark:text-white lg:dark:hover:text-secondary-green dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">ELEKTRISCHE FIETSEN</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-1 lg:text-nav-text-green text-primary-white hover:text-nav-text-green rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-green lg:p-0 dark:text-white lg:dark:hover:text-secondary-green dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">ACCESOIRES</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-1 lg:text-nav-text-green text-primary-white hover:text-nav-text-green rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-green lg:p-0 dark:text-white lg:dark:hover:text-secondary-green dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">OVER BIKESTORE</a>
          </li>
          <li>
            <a href="faqDetail.html" class="block py-2 px-1 lg:text-nav-text-green text-primary-white hover:text-nav-text-green rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-green lg:p-0 dark:text-white lg:dark:hover:text-secondary-green dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">SERVICE</a>
          </li>
          <li>
            <a href="contact.html" class="block py-2 px-1 lg:text-nav-text-green text-primary-white hover:text-nav-text-green rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary-green lg:p-0 dark:text-white lg:dark:hover:text-secondary-green dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>
<style lang="scss"></style>
