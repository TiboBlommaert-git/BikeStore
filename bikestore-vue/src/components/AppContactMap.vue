<template>
  <div class="relative mb-20 lg:mb-40">
    <div class="flex flex-col-reverse lg:flex-row lg:mt-0">
      <div id="map" class="w-full h-40 mt-0 z-0"></div>

      <div class="max-w-screen-xl mx-auto lg:absolute lg:top-min2rem lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-fixed-nav-green p-4 rounded-1px shadow-lg w-full flex justify-center">
        <div class="flex py-8 w-full lg:w-85p justify-center items-center">
          <div class="flex justify-center items-center gap-2">
            <div><img src="../assets/icon-marker.png" alt="iconmarker" class="w-5 mr-2" /></div>
            <p class="text-2xl md:text-xl xl:text-2xl text-primary-white">Kom zeker eens langs in onze winkel</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';

onMounted(() => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZWtoZXJyZWdvZHMiLCJhIjoiY2xoNXl6dnNqMDB5cTNxcm84NGpnMXk5ciJ9.fBS-uIrKQ6yTaPdz55PYgQ';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [3.264449, 50.819478], // Longitude and latitude of Kortrijk
    zoom: 10,
    attributionControl: false,
  });

  map.scrollZoom.disable();

  map.on('load', () => {
    const popup = new mapboxgl.Popup({ offset: 25 }) // create a popup
      .setHTML(`
      <strong>Bikestore</strong>
      <p>Mandellaan 377, 8800 Roeselare</p>
      <img src="src/assets/blogitem1.svg" alt="Bikestore" style="width: 100%; height: auto;">
    `); // HTML content for the popup

    new mapboxgl.Marker({
      color: '#557260', // Red color
    })
      .setLngLat([3.251073, 50.824672]) // Set marker at the specified coordinates
      .setPopup(popup) // associate this popup with the marker
      .addTo(map);
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
  });
});
</script>

<style>
@import 'https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css';
</style>
