<template>
  <div class="mt-20 lg:mt-40 w-3/4 relative">
    <img src="../assets/bike.svg" alt="bike" class="absolute bottom-0 c-bike transform flip-image" />
    <hr class="h-200px my-2 bg-nav-text-green w-full border-1 border-nav-text-green c-line" ref="observeMe" />
  </div>

  <div class="max-w-screen-xl mx-auto mt-20 lg:mt-40 mb-20 lg:mb-40 md:mx-auto px-10">
    <div class="grid grid-cols-12 gap-10">
      <div class="col-span-12 lg:col-span-8 md:mb-5 md:mx-auto mr-4">
        <video class="w-full h-full object-cover" autoplay loop muted>
          <source src="../assets/preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div class="col-span-12 lg:col-span-4 my-auto md:mx-auto">
        <h2 class="font-bold text-4xl text-nav-text-green mb-1">Moustache</h2>
        <h3 class="text-2xl mb-2">Musti</h3>
        <p class="mb-3">De Moustache elektrische fiets combineert stijl, comfort en kracht voor een duurzame en plezierige rijervaring.</p>
        <p class="mb-6 text-4xl text-nav-text-green">€2399</p>
        <button class="bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-inter border border-white hover:border-nav-text-green transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green">Lees meer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const observeMe = ref(null);
let observer;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log('Element is in the viewport!');
        document.querySelector('.c-bike').classList.add('animate-bike');
        document.querySelector('.c-bike').classList.remove('animate-bike-end');
      } else {
        document.querySelector('.c-bike').classList.add('animate-bike-end');
        document.querySelector('.c-bike').classList.remove('animate-bike');
      }
    });
  });

  if (observeMe.value) {
    observer.observe(observeMe.value);
  }
});

onUnmounted(() => {
  if (observer && observeMe.value) {
    observer.unobserve(observeMe.value);
  }
});
</script>

<style>
.animate-bike {
  animation: moveBike 3s ease forwards;
}

.animate-bike-end {
  animation: moveBikeToEnd 1s ease forwards;
}

@keyframes moveBike {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(25%);
  }
}

@keyframes moveBikeToEnd {
  0% {
    transform: translateX(25%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.off-screen {
  position: absolute;
  left: -100%; /* Plaats de fiets helemaal links buiten het scherm */
}

.flip-image {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
